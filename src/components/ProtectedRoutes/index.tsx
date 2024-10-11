import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";

function ProtectedRoutes() {
  const location = useLocation();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <p>loading...</p>;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default ProtectedRoutes;
