const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log("Auth in RequireAuth:", auth); // Debugging: Check the auth state
  console.log("Allowed roles:", allowedRoles); // Debugging: Check the allowed roles

  return (
    auth?.roles?.find((role) => allowedRoles?.includes(role))
      ? <Outlet />
      : auth?.user
      ? <Navigate to="/unauthorized" state={{ from: location }} replace />
      : <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;