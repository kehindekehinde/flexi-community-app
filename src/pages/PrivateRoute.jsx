import { Navigate, Route, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/Authcontext";


const PrivateRoute = () => {
  // const auth = null;
  const { currentUser } = useAuth();
  // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
