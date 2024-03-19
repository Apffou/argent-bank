import { useDispatch, useSelector } from "react-redux"
import { selectUserProfile } from "../../Redux/Selectors";

export default function EditUsername() {

    //Fonction dispatch de Redux
    const dispatch = useDispatch();

    const { firstName, lastName, userName } = useSelector(selectUserProfile);

    return (
        <div class="header">
            <h1>Welcome back<br />{userName} !</h1>


            <button class="edit-button">Edit Name</button>
        </div>
    )
}