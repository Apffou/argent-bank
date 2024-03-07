import { createSlice } from "@reduxjs/toolkit";

// Création d'un Slice permettant l'authentification avec un nom, un état initial et des réducteurs
const userSlice = createSlice({
    name: "user", //nom du slice
    initialState, // État initial
    reducers: {
        signinStart: (state, action) => {
            // Une action pour se connecter
            // Une action pour indiquer à l'utilisateur qu'il est connecté
            // Une action pour indiquer une erreur à l'utilisateur
            // Une action si il coche la case remember me
        },
        signOut: () => { },
    }
});