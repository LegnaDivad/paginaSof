import { Navigate } from 'react-router-dom'
import { useGetUser } from '../hooks/useGetUser';

export default function PrivateRoute({ children }) {
    const { user, isLoading } = useGetUser();

  if (!isLoading && !user?.email) return <Navigate to="/login" replace />

  return children;
}
