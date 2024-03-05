import { NavLink } from 'react-router-dom';
import Item from '../Item/Item';
import './Nav.scss';

/*  Faire une condition, si on a le token on affiche tel rendu sinon rendu de base*/

function Nav() {
    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                <Item text="Sign In" to="/login" classIcon="fa fa-user-circle"></Item>
                <Item text="Sign Out" to="/" classIcon="fa fa-sign-out"></Item>
                { /* Inserer ici la fonction pour mettre le bon prénom dynamiquement */}
                <Item text="Tony" to="/user" classIcon="fa fa-user-circle"></Item>
            </div>
        </nav >
    )
}
export default Nav;