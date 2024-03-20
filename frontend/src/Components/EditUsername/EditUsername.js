import './EditUsername.scss';
import { useDispatch, useSelector } from "react-redux"
import { selectUserProfile } from "../../Redux/Selectors";
import { useState } from 'react';
import { setError, updateUsername } from '../../Redux/Reducers/userSlice';


export default function EditUsername() {

    //Fonction dispatch de Redux
    const dispatch = useDispatch();

    // Utilisation du sélecteur pour extraire les propriétés du profil utilisateur
    const { firstName, lastName, userName } = useSelector(selectUserProfile);

    //récupêration du token 
    const token = useSelector((state) => state.user.token);

    // Gestion de l'erreur
    const error = useSelector((state) => state.user.error);

    //Gestion de l'ouverture du formulaire d'édition
    const [isEditing, setEditing] = useState(false);

    //Fonction pour editer le username
    const [editUserName, setEditUserName] = useState(userName);

    // Fonction qui ouvre le formulaire d'édition du userName
    const handleEditClick = () => {
        setEditing(true);
    };
    // Fonction pour fermer le formulaire d'édition sans sauvegarder les nouvelles informations
    const handleCancelClick = () => {
        setEditUserName(userName);
        setEditing(false);
    }

    // Fonction appelée à chaque modification du pseudo de l'utilisateur
    const handleChangeUserName = (event) => {
        //Recuperation du nom d'utilisateur en cours d'édition 
        setEditUserName(event.target.value);
    };


    //Fonction pour soumettre la soumission du formulaire
    const handleSaveClick = async (event) => {
        event.preventDefault();
        setEditing(false);
        try {
            const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                method: 'PUT',
                headers: {
                    accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userName: editUserName,
                }),
            });
            if (response.ok) {
                const responseData = await response.json();
                dispatch(updateUsername(editUserName));
                console.log('Le nom d/utilisateur a été mis à jour avec succès :', responseData);
            } else {
                //Affiche dans la console l'erreur
                console.error('Error :', response.statusText);
                //Stock l'erreur dans l'application
                dispatch(setError(response.statusText))
            }
        } catch (error) {
            //Affiche dans la console l'erreur
            console.error('Error :', error);
            //Stock l'erreur dans l'application
            dispatch(setError(error.message))
        }
    };




    return (
        <div>
            {isEditing ? (
                <div className='form-content'>
                    <h2>Edit User Info</h2>
                    <form>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" placeholder={userName} onChange={handleChangeUserName} />
                        <label htmlFor="firstName">First Name </label>
                        <input type="text" placeholder={firstName} readOnly />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder={lastName} readOnly />
                    </form>
                    <div className='buttons-edition'>
                        <button className="button-form-edit" type='submit' onClick={handleSaveClick}>Save</button>
                        <button className="button-form-edit cancel" type='button' onClick={handleCancelClick}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="header">
                    <h1>Welcome back<br />{userName} !</h1>
                    <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
                </div>
            )}
        </div>
    )
}