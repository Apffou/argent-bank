import { useState } from 'react';
import './Form.scss'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Form() {

    const dispatch = useDispatch(); // Permet de déclencher une action du store
    const navigate = useNavigate(); // Permet de naviger entre différentes pages

    // Stockage des valeurs des champs du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Création d'un objet 'formData avec les valeurs des champs du formulaire
        const formData = {
            email: email,
            password: password,
        };

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
}
export default Form();