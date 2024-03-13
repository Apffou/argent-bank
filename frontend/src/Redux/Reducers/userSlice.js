import { createSlice } from "@reduxjs/toolkit";


const checkToken = () => {
    return localStorage.getItem('validToken') || null;
};

const initialState = {
    //Propriété d'authentification
    token: checkToken(), // Initialisation du Token grâce à la valeur donné par chekToken()

    //Propriété pour la gestion des erreurs
    error: null, //Aucune erreur initialement
};


// Création d'un Slice permettant l'authentification avec un nom, un état initial et des réducteurs
const userSlice = createSlice({
    name: "user", //nom du slice
    initialState, // État initial
    reducers: {
        setSignIn: (state, action) => { // Une action pour se connecter
            state.token = action.payload.token;
            // A FAIRE : Une action si il coche la case remember me
        },
        signOut: (state, action) => { },

        //Réducteur pour définir une erreur
        setError(state, action) {
            state.error = action.payload;
        },

        //Réducteur pour effacer l'erreur
        clearError(state) {
            state.error = null; //Rénitialise l'erreur à null
        },
    }
});