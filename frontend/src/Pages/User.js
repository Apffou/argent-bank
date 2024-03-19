import { useDispatch, useSelector } from "react-redux";
import Account from "../Components/Account/Account";
import EditUsername from "../Components/EditUsername/EditUsername";
import { selectIsConnected } from "../Redux/Selectors";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userProfile } from "../Redux/Reducers/userSlice";


function User() {

    const dispatch = useDispatch();
    const isConnected = useSelector(selectIsConnected);
    const navigate = useNavigate(); // Permet de naviger entre différentes pages

    // Vérifie si l'utilisateur est connecté lors du chargement initial du composant
    useEffect(() => {
        // si il n'est pas connecté
        if (!isConnected) {
            // On redirige l'utilisateur vers la page de connexion
            navigate('/login');
        }
        // L'effet est executé à chaque fois qu'une valeur change
    }, [isConnected, navigate]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Récupération du token depuis le localstorage 
                const checkToken = localStorage.getItem('validToken');
                // Envoie une requête de type POST à l'API pour récupérer les données de profil
                const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                    method: 'POST',
                    headers: {
                        accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${checkToken}`,
                    },
                });
                // Vérifie si la réponse est ok
                if (response.ok) {
                    // Convertit la réponse en format JSON
                    const responseData = await response.json();
                    // Dispatch l'action setProfile avec les données de profil récupérées
                    dispatch(userProfile(responseData));
                    // Affiche dans la console les données de profil
                    console.log(responseData);
                    console.log(responseData.body);
                } else {
                    // Affiche une erreur si la réponse n'est pas OK
                    console.error('Error :', response.statusText);
                }
            } catch (error) {
                // Affiche une erreur en cas d'échec de la requête
                console.error('Error', error);
            }
        };
        // Appelle la fonction fetchData pour charger les données de profil
        fetchData();
        // L'effet est exécuté une seule fois après le rendu initial du composant
    }, [dispatch]);



    return (
        <body>
            <main class="main bg-dark">
                <EditUsername />
                <h2 class="sr-only">Accounts</h2>
                <Account
                    accountTitle="Argent Bank Checking (x8349)"
                    accountAmount="$2,082.79"
                    accountAmountDescr="Available Balance" >
                </Account>
                <Account
                    accountTitle="Argent Bank Savings (x6712)"
                    accountAmount="$10,928.42"
                    accountAmountDescr="Available Balance" >
                </Account>
                <Account
                    accountTitle="Argent Bank Credit Card (x8349)"
                    accountAmount="$184.30"
                    accountAmountDescr="Current Balance" >
                </Account>
            </main>
        </body>
    )
}
export default User;