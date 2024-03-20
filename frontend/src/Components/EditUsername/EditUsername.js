import './EditUsername.scss';
import { useDispatch, useSelector } from "react-redux"
import { selectUserProfile } from "../../Redux/Selectors";


export default function EditUsername() {

    //Fonction dispatch de Redux
    const dispatch = useDispatch();
    // Utilisation du sélecteur pour extraire les propriétés du profil utilisateur
    const { firstName, lastName, userName } = useSelector(selectUserProfile);

    return (
        <div>
            <div className="header">
                <h1>Welcome back<br />{userName} !</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <div className='form-content'>
                <h2>Edit User Info</h2>
                <form>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder={userName} />
                    <label htmlFor="">First Name </label>
                    <input type="text" placeholder={firstName} readOnly />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder={lastName} readOnly />
                </form>
                <div className='buttons-edition'>
                    <button class="button-form-edit" type='submit'>Save</button>
                    <button class="button-form-edit cancel" type='button'>Cancel</button>
                </div>
            </div>
        </div>
    )
}