import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
