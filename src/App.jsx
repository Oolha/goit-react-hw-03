import { useState, useEffect } from "react";

import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  const [contacts, setContact] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filterValue, setFilterValue] = useState("");
  const handleFilter = (event) => {
    const value = event.target.value;

    setFilterValue(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const addContactForm = (contactObject) => {
    setContact((prevContacts) => [...prevContacts, contactObject]);
  };

  const DeleteContact = (contactId) => {
    setContact(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className="container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onAddContact={addContactForm} />
      <SearchBox value={filterValue} onChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={DeleteContact}
      />
    </div>
  );
}

export default App;
