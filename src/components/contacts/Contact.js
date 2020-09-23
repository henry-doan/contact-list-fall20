import React from 'react';
import { Button, Table } from 'semantic-ui-react';

const Contact = ({ id, firstName, phone, removeContact }) => (
  <Table.Row>
    <Table.Cell>{firstName}</Table.Cell>
    <Table.Cell>{phone}</Table.Cell>
    <Table.Cell>
      <Button color='red' onClick={() => removeContact(id)}>
        Delete
      </Button>
    </Table.Cell>
  </Table.Row>
)

export default Contact;