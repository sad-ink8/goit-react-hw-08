import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { refresh } from "../redux/auth/operations";
import { selectIsRefreshing } from "../redux/auth/selectors";

import Layout from "./Layout/Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ContactsPage from "../pages/ContactsPage";
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
export default App;
