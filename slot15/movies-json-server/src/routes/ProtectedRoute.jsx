import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
    const { state } = useAuth();
    const { user } = state;

    // Nếu chưa login, chuyển hướng ngay lập tức (trước khi render)
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // Nếu đã login, render component con
    return children;
}
