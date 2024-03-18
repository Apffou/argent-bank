import { NavLink } from 'react-router-dom';
import Item from '../Item/Item';
import './Nav.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn, signOut } from '../../Redux/Reducers/userSlice';
import { selectIsConnected } from '../../Redux/Selectors';


export default function Nav() {

    //On récupère la valeur de userConnexion depuis le store
    const isAuthenticated = useSelector(selectIsConnected);

    const userName = useSelector((state) => state.user.userName);

    // Utilisaton du hook useDispatch pour obtenir la fonction de dispatch du store Redux
    const dispatch = useDispatch();

    //const handleSignIn = () => {
    //   dispatch(setSignIn());
    //};

    const handleSignout = () => {
        dispatch(signOut());
        console.log("deco?")
    };


    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src="./img/argentBankLogo.webp" alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>


            <div>
                {isAuthenticated ? (
                    <>
                        <Item text={userName} to="/user" classIcon="fa fa-user-circle"></Item>
                        <Item text="Sign Out" to="/" onClick={handleSignout} classIcon="fa fa-sign-out"></Item>
                    </>
                ) : (
                    <Item text="Sign In" to="/login" classIcon="fa fa-user-circle"></Item>
                )}


            </div>
        </nav >
    )
}
