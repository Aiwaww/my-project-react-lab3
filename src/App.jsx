import React, { lazy } from 'react';
import { LoginForm } from './components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthPage from './pages/AuthPage';
import PicturePage from './pages/PicturePage';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/err" element={<ErrorPage />} />
        <Route path="/picture" element={<PicturePage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
