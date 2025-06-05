import { Navigate } from 'react-router-dom'
import { signOut } from '../components/Login/utils';

export default function Logout() {
  signOut();
  return (
    <Navigate to="/" replace />
  );
}
