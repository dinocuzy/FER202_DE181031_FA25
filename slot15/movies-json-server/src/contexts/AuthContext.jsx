import React, { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";
import { authReducer, initialAuth } from "../reducers/loginReducer";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialAuth);

    useEffect(() => {
        const saved = localStorage.getItem("auth_user");
        if (saved)
            dispatch({ type: "LOGIN_SUCCESS", payload: JSON.parse(saved) });
    }, []);

    const login = async () => {
        const newErrors = {};
        if (!state.username.trim())
            newErrors.username = "Username or Email is required";
        if (!state.password.trim())
            newErrors.password = "Password is required";

        if (Object.keys(newErrors).length > 0) {
            dispatch({ type: "setError", payload: newErrors });
            return;
        }

        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.get(
                `http://localhost:3001/accounts?username=${state.username}&password=${state.password}`
            );
            if (res.data.length === 0)
                throw new Error("Invalid credentials");

            const user = res.data[0];
            localStorage.setItem("auth_user", JSON.stringify(user));
            dispatch({ type: "LOGIN_SUCCESS", payload: user });
            return user;
        } catch (err) {
            dispatch({ type: "LOGIN_FAIL", payload: err.message });
        }
    };

    const logout = () => {
        localStorage.removeItem("auth_user");
        dispatch({ type: "LOGOUT" });
    };

    return (
        <AuthContext.Provider value={{ state, dispatch, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
