import { Navigate, useLocation, useNavigationType } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { toast } from "react-hot-toast";
import { useRef, useEffect } from "react";

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();
  const navigationType = useNavigationType();
  const notLogged = useRef(false);

  useEffect(() => {
    if (
      navigationType === "PUSH" &&
      !isRefreshing &&
      !isLoggedIn &&
      !notLogged.current
    ) {
      toast.error("Please log in!");
      notLogged.current = true;
    }
  }, [isLoggedIn, isRefreshing, navigationType]);

  if (isRefreshing) return null;

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
