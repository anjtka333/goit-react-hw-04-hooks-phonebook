import { Component } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import s from "./components/ContactForm/ContactForm.module.scss";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = (text) => {
    const { name, number } = text;

    if (
      this.state.contacts.some((item) => {
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
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  handleFilterChange = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filter = () => {
    const filteredContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filteredContacts;
  };

  delateItem = (id) => {
    return this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((item) => item.id !== id),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts)||[];
    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChange={this.handleFilterChange}
          inputStyle={s.input}
        />
        <ContactList contactsFiltered={this.filter} onClick={this.delateItem} />
      </div>
    );
  }
}

export default App;


