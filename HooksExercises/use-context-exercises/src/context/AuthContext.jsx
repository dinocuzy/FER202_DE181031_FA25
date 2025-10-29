import { createContext } from "react";
import React from "react";
import MockAccount from "../data/MockAccount";
export const AuthContext = createContext({
    user: null,
    error: '',
    login: () => { }
});
export const AuthProvider = ({ children }) => {
    const [user, setUser] = React.useState(null);
    const [error, setError] = React.useState('');
    const login = (username, password) => {
        const account = MockAccount.find(acc => (acc.username === username || acc.email === username) && acc.password === password);
        if (!account) {
            setError("Username or password is incorrect!!!");
            setUser(null);
        } else if (account.role !== 'admin') {
            setError("Only admin can login!!!");
            setUser(null);
        } else if (account.status !== 'active') {
            setError("Your account is locked!!!");
            setUser(null);
        } else {
            setError('');
            setUser(account);
        }

    }
    const contextValue = {
        user,
        error,
        login
    };
    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }
    return context;
}
