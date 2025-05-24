import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.Nav}>
      <NavLink className={css.NavL} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.NavL} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
