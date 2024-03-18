import { createSlice } from "@reduxjs/toolkit";


const checkToken = () => {
    return localStorage.getItem('validToken') || null;
};

const initialState = {
    //Propriété d'authentification
    token: checkToken(), // Initialisation du Token grâce à la valeur donné par chekToken()

    userConnexion: false,

    //Propriété pour la gestion des erreurs
    error: null, //Aucune erreur initialement

    // Initialisation des Champs pour le profil utilisateur
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
};


// Création d'un Slice permettant l'authentification avec un nom, un état initial et des réducteurs
const userSlice = createSlice({
    name: "user", //nom du slice
    initialState, // État initial
    reducers: {
        setSignIn: (state, action) => {
            state.token = action.payload.token; // Mise à jour de la valeur du token 
            state.userConnexion = true; // L'utilisateur est connecté
        },
        signOut: (state, action) => {
            state.token = null; // Réinitialisation du Token
            state.userConnexion = false; // L'utilisateur n'est plus connecté
            localStorage.removeItem('validToken'); // Suppresion du Token dans le localstorage
        },

        //Réducteur pour définir une erreur
        setError: (state, action) => {
            state.error = action.payload;
        },

        //Réducteur pour effacer l'erreur
        clearError: (state) => {
            state.error = null; //Rénitialise l'erreur à null
        },

        //Reducteur pour mettre à jour les informations du profil utilisateur
        userProfile: (state, action) => {
            state.firstName = action.payload.body.firstName;
            state.lastName = action.payload.body.lastName;
            state.userName = action.payload.body.userName;
            state.email = action.payload.body.email;
        },

        updateUsername: (state, action) => {
            state.username = action.payload;
        }


    }
});
//Exportation des actions générées par le slice
export const { setSignIn, signOut, setError, clearError } = userSlice.actions;

// Exportation du reducer 
export default userSlice.reducer;