import React, { Component } from 'react';
import { Container, Header, Button, Icon } from 'semantic-ui-react';
import Contacts from './components/contacts/Contacts';
import ContactForm from './components/contacts/ContactForm';

class App extends Component {
  state = { contacts: [
    { id: 1, firstName: 'bob', phone: '123-123-1234'},
    { id: 2, firstName: 'jill', phone: '123-321-1234'},
    { id: 3, firstName: 'rick', phone: '123-111-1234'},
  ],
    showForm: true,
  }

  toggleForm = () => this.setState({ showForm: !this.state.showForm})

  getId = () => {
    // NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  addContact = (incomingContact) => {
    const { contacts } = this.state
    let newContact = { id: this.getId(), ...incomingContact }
              //  firstName: incomingContact.firstName, phone: incomingContact.phone
    this.setState({ contacts: [ ...contacts, newContact ] })
  }

  removeContact = (id) => {
    const contacts = this.state.contacts.filter( c => {
      if (c.id !== id) {
        return c
      }
    })
    this.setState({ contacts })
  }

  render() {
    // const contacts = this.state.contacts
    // const todos = this.state.todos
    // const { contacts, todos } = this.state 
    const { contacts, showForm } = this.state 
    return(
      <Container>
        <Header>Contact List</Header>
        <Button icon color="blue" onClick={this.toggleForm}>
          <Icon name={showForm ? 'angle double up' : 'angle double down' } />
        </Button>
        { 
          showForm ? 
            <ContactForm addContact={this.addContact} />
          :
            null
        }
        <Contacts contacts={contacts} removeContact={this.removeContact} />
      </Container>
    )
  }
}

export default App;
