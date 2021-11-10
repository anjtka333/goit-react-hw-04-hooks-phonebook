import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./components/ContactForm/ContactForm.module.scss";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = (text) => {
    const { name, number } = text;
    if (
      contacts.some((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
      })
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: v4(),
      name: name,
      number: number,
    };
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const delateItem = (id) => {
    return setContacts((prevContacts) =>
      prevContacts.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts && setContacts(contacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter
        value={filter}
        onChange={handleFilterChange}
        inputStyle={s.input}
      />
      <ContactList contactsFiltered={filteredContacts} onClick={delateItem} />
    </div>
  );
};

export default App;
