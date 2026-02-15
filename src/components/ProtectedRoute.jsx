import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ childern }) => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return childern;
};

export default ProtectedRoute;
