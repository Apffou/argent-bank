import { useState } from 'react';
import './Form.scss'
import { Link } from "react-router-dom";

function Form() {
    // Stockage des valeurs des champs du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    return (
        <form>
            <div className="input-wrapper">
                <label for="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
            </div>
            {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
            <Link to="/user" className="sign-in-button">Sign In</Link>
            {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
            {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
        </form>
    )
}
export default Form;