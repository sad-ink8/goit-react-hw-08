import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import css from "../Contact/Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div>
      <p className={css.contactName}>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
