import { getItem } from '../hooks/localStore';

function ProtectedRoute({ children }) {
  const token = getItem('TOKEN');
  return token ? children : <Navigate to="/auth" />;
}

export default ProtectedRoute;
