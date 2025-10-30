import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { MovieProvider } from "./contexts/MovieContext";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import MovieManager from "./pages/MovieManager";
import ProtectedRoute from "./routes/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MovieProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginForm />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute>
                  <MovieManager />
                </ProtectedRoute>
              }
            />
          </Routes>
        </MovieProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
