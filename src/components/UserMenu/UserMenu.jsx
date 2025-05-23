import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <p>User {name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
