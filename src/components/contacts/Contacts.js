import React from 'react';
import { Table } from 'semantic-ui-react';
import Contact from './Contact';

const Contacts = ({ contacts, removeContact }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Options</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {
        contacts.map( contact => (
          <Contact key={contact.id} {...contact} removeContact={removeContact} />
          // firstName=contact.firstName phone=contact.phone...
        ))
      }
    </Table.Body>
  </Table>
)

export default Contacts;