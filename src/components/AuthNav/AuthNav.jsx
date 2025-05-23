import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={css.AuthNav}>
      <NavLink className={css.AuthNavL} to="/register">
        Register
      </NavLink>
      <NavLink className={css.AuthNavL} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
