import {createContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import authReducer from "../reducers/authReducer";

const initialState = {
    user: null,
    isLogInBeingProcessed: false,
    error: false,
}
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer,  initialState);

    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user));
    },[state.user]);

    return <AuthContext.Provider
        value={{
            user: state.user,
            isLogInBeingProcessed: state.isLogInBeingProcessed,
            error: state.error,
            dispatch,
    }}>{children}</AuthContext.Provider>;
}