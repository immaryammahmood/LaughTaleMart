import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  // Show loader while checking authentication
  if (isLoading) {
    return <Loader />;
  }

  // Redirect if seller is not logged in
  if (!isSeller) {
    return <Navigate to="/shop-login" replace />;
  }

  // If seller exists, render protected content
  return children;
};

export default ProtectedRoute;
