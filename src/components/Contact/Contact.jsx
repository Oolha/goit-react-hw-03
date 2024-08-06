import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <p>
        <FaUser className={css.icon} size="14px" />
        {name}
      </p>
      <p>
        <FaPhone className={css.icon} size="14px" />
        {number}
      </p>
      <button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
        className={css.btn}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
