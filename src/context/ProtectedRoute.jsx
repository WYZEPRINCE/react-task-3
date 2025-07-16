import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return null; // or a loading indicator

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};