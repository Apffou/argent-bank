import { useState } from 'react';
import './Form.scss'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setSignIn } from '../../Redux/Reducers/userSlice';
import { selectIsConnected } from '../../Redux/Selectors';


function Form() {

    const dispatch = useDispatch(); // Permet de déclencher une action du store
    const navigate = useNavigate(); // Permet de naviger entre différentes pages

    const isConnected = useSelector(selectIsConnected);

    // Stockage des valeurs des champs du formulaire
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //Fonction pour gérer la soumission du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Création d'un objet 'formData avec les valeurs des champs du formulaire
        const formData = {
            email: email,
            password: password,
        };

        //Fonction pour gérer les erreurs HTTP
        const handleError = async (response) => {
            const errorData = await response.json();
            console.error('Erreur :', response.statusText);//Affichage dans la console avec le statut de réponse
            setErrorMessage(errorData.message);//Mise à jour du message
        };

        try {
            //Envoi d'une requête vers l'API pour connecter l'utilisateur
            const response = await fetch('http://localhost:3001/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            //Si la requête est réussi alors on extrait et stocke le jeton et on redirige vers la page
            if (response.ok) {
                const responseData = await response.json();
                const token = responseData.body.token;
                localStorage.setItem('validToken', token);
                navigate('/user');
                dispatch(setSignIn({ token }));
                //Sinon on envoit l'erreur
            } else {
                handleError(response);
            }
            //Gestion des erreurs avec mise à jour du message dans le formulaire
        } catch (error) {
            console.error('Erreur :', error);
            setErrorMessage('Une erreur s\'est produite');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label for="email">Email</label>
                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <label for="password">Password</label>
                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type='submit'>Sign In</button>
            {errorMessage && <p className='errorMessage'>{errorMessage} </p>}
            {isConnected && <p className='isConnected'>Connexion réussi ! </p>}
        </form>
    )
}

export default Form();