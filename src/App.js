import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./components/ContactForm/ContactForm.module.scss";

const App = () => {
  // state = {
  //   contacts: [],
  //   filter: "",
  // };
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
    // this.setState(({ contacts }) => ({
    //   contacts: [contact, ...contacts],
    // }));
    setContacts((prevContacts) => [contact, ...prevContacts]);
  };

  const handleFilterChange = (e) => {
    // this.setState({
    //   filter: e.currentTarget.value,
    // });

    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const delateItem = (id) => {
    // return this.setState((prevState) => {
    //   return {
    //     contacts: prevState.contacts.filter((item) => item.id !== id),
    //   };
    // });
    return setContacts((prevContacts) =>
      prevContacts.filter((item) => item.id !== id)
    );
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(contacts)||[];
  //   this.setState({ contacts: parsedContacts });
  // }

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    contacts && setContacts(contacts);
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

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
