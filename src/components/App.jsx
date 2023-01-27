import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';

import { Filter } from './Filter/filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = (name, number) => {
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    if (this.state.contacts.find(contact => contact.name === name)) {
      alert(`${contact.name}is already in contacts`);
      return;
    }

    this.addContactToContacts(contact);
  };

  addContactToContacts = newContact => {
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
  };

  filterContactsByName = () => {
    if (this.state.filter === '') return this.state.contacts;
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  onDelete = id =>
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));

  componentDidMount() {
    const getContacts = JSON.parse(localStorage.getItem('contacts'));
    getContacts && this.setState({ contacts: getContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const filteredContacts = this.filterContactsByName();
    return (
      <div className={css.phonebook}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>

        {this.state.contacts.length !== 0 ? (
          <>
            <Filter onChange={this.handleFilterChange} />
            <ContactList
              filteredContacts={filteredContacts}
              onDelete={this.onDelete}
            />
          </>
        ) : (
          <h3>Add the contact to the list</h3>
        )}
      </div>
    );
  }
}
