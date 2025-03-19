import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();


  // Convert roles to an array if it's a single value
  const userRoles = Array.isArray(auth?.roles) ? auth.roles : [auth?.roles];

  return (
    userRoles && userRoles.some(role => allowedRoles?.includes(role))
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;