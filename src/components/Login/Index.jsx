import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from './utils';
import { useGetUser } from '../../hooks/useGetUser';
import './login.css'

function Login() {
  const navigate = useNavigate();
  const { user, isLoading } = useGetUser()

  const autoLogin = async () => {
    if (!isLoading && user?.email) {
      navigate('/')
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return (
    <div>
      <button onClick={signIn} className='loginButton'>
        <img src="/RecreaAcademy/logo_google_signin.png" width='20px' height='20px' salt="G" />
        <span> Sign in with Google</span>
      </button>
    </div>
  );
}

export default Login;

