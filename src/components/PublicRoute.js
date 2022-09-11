import { Route, Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const PublicRoute = ({ children }) => {
  const { user } = useAuthContext();
  return  !user ? children : <Navigate to="/" />;
};

export default PublicRoute;