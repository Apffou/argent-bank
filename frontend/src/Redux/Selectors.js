import { createSelector } from "@reduxjs/toolkit";

// Selecteur pour récupérer l'état de l'utilisateur (vrai/faux)
export const selectIsConnected = state => state.user.userConnexion;

// Utilisation de createSelector de Redux pour extraire plusieurs propriétés dans un seul selector
export const selectUserProfile = createSelector(
    state => state.user.firstName,
    state => state.user.lastName,
    state => state.user.userName,
    (firstName, lastName, userName) => ({
        firstName,
        lastName,
        userName,
    })
);