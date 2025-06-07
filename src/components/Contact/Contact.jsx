import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div className={css.card}>
      <div>
        <p>
          <FaUser className={css.icon} />
          {contact.name}
        </p>
        <p>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <div>
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
