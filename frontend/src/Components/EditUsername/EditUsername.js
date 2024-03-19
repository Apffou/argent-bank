import { useDispatch, useSelector } from "react-redux"
import { selectUserProfile } from "../../Redux/Selectors";

export default function EditUsername() {

    //Fonction dispatch de Redux
    const dispatch = useDispatch();

    const { firstName, lastName, userName } = useSelector(selectUserProfile);

    return (
        <div>
            <div class="header">
                <h1>Welcome back<br />{userName} !</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <div>
                <form>
                    <label htmlFor="">User Name</label>
                    <input type="text" placeholder="Pseudo" />
                    <label htmlFor="">First Name {firstName} </label>
                    <input type="text" placeholder={firstName} readOnly />
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder={lastName} readOnly />
                </form>
                <button class="button-form-edit">Save</button>
                <button class="button-form-edit">Cancel</button>
            </div>
        </div>
    )
}