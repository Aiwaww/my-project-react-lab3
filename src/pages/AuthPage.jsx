import { useEffect, useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm';
import { getItem } from '../helper/localStore';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  function toggleForm() {
    setIsLogin(val => !val);
  }

  useEffect(() => {
    if (getItem('TOKEN')) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div className="auth-container">
      <h2> Authorization</h2>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <button type="button" onClick={toggleForm}>
        {isLogin ? 'Dont have an account?' : 'Have an account already?'}
      </button>
    </div>
  );
};

export default AuthPage;
