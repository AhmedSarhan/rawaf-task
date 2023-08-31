import { Navigate } from "react-router-dom";
import { useAuth } from "../../../modules/auth/provider";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const {token} = useAuth();

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  return children;
};
