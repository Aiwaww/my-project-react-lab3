import Logo from '../../assets/img/logo.jpg';
import { MyButton } from './MyButton';
import { getItem, setItem } from '../helper/localStore';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export function MyHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  function redirectToAuth() {
    navigate('/auth');
  }

  function redirectToProfile() {
    navigate('/profile');
  }

  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="LOGO" />
        <Link to={'/'}>
          <h1>Arteloise</h1>
        </Link>
      </div>
      <nav>
        {(getItem('TOKEN') && (
          <MyButton text="Profile" onClick={redirectToProfile} />
        )) ||
          (location.pathname !== '/auth' && (
            <MyButton text="Authorize" onClick={redirectToAuth} />
          ))}
      </nav>
    </header>
  );
}
