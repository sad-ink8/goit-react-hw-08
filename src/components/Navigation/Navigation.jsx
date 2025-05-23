import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

export default function Navigation() {
  return (
    <nav className={css.Nav}>
      <NavLink className={css.NavL} to="/">
        Home
      </NavLink>
      <NavLink className={css.NavL} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}
