import './EditUsername.scss';
import { useDispatch, useSelector } from "react-redux"
import { selectUserProfile } from "../../Redux/Selectors";
import { useState } from 'react';


export default function EditUsername() {

    //Fonction dispatch de Redux
    const dispatch = useDispatch();

    // Utilisation du sélecteur pour extraire les propriétés du profil utilisateur
    const { firstName, lastName, userName } = useSelector(selectUserProfile);

    const token = useSelector((state) => state.user.token);

    //Gestion de l'ouverture du formulaire d'édition
    const [isEditing, setEditing] = useState(false);

    // Fonction qui ouvre le formulaire d'édition du userName
    const handleEditClick = () => {
        setEditing(true);
    };
    // Fonction pour fermer le formulaire sans sauvegarder les nouvelles informations
    const handleCancelClick = () => {
        setEditing(false);
    }

    return (
        <div>
            {isEditing ? (
                <div className='form-content'>
                    <h2>Edit User Info</h2>
                    <form>
                        <label htmlFor="userName">User Name</label>
                        <input type="text" placeholder={userName} />
                        <label htmlFor="firstName">First Name </label>
                        <input type="text" placeholder={firstName} readOnly />
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" placeholder={lastName} readOnly />
                    </form>
                    <div className='buttons-edition'>
                        <button class="button-form-edit" type='submit'>Save</button>
                        <button class="button-form-edit cancel" type='button' onClick={handleCancelClick}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="header">
                    <h1>Welcome back<br />{userName} !</h1>
                    <button class="edit-button" onClick={handleEditClick}>Edit Name</button>
                </div>
            )}
        </div>
    )
}