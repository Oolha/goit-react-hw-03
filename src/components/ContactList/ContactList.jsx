import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.listItem}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
