import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate('/');
  }
  let id = null;
  useEffect(() => {
    id = setTimeout(() => {
      navigateToHome();
    }, 4000);

    return () => clearInterval(id);
  });

  return (
    <div className="error">
      <h2>Something went wrong!</h2>
      <p>Sorry, this content is unavailable. Redirect in: 5sec</p>
    </div>
  );
}
