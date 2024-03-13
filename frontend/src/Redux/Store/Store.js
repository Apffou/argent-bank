// Appel de la fonction 'configureStore' pour créer un store Redux
import { configureStore } from '@reduxjs/toolkit';
//import { default as userReducer } from '../Reducers/userSlice';

//Configuration du store avec spécification des réducteurs
export const store = configureStore({
    reducer: {
        //Nom de la propriété pour permettre de dispatcher dans l'application
        //user: userReducer,
    }
});

export default store;