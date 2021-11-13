import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const authenticationData = useFirebase();
    return (
        <AuthContext.Provider value={authenticationData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;