import { NavLink } from "react-router-dom";

function Item(params) {
    return (
        <div>
            <NavLink className="main-nav-item" to={params.to}>
                <i className={params.classIcon}></i>
                {params.text}
            </NavLink>
        </div>
    )
}
export default Item;