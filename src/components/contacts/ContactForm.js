import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { firstName: '', phone: '' }

  // save everything the user types in the state
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    // this.setState({ firstName: 'bob' })
    // this.setState({ phone: '123-123-1233' })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // add function to add to array 
    this.props.addContact(this.state)
    // clear out the form
    this.setState({ firstName: '', phone: '' })
  }

  render() {
    const { firstName, phone } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='firstName'
          value={firstName}
          onChange={this.handleChange}

          required
          label='first name'
        />
        <Form.Input
          name='phone'
          value={phone}
          onChange={this.handleChange}

          required
          label='phone'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ContactForm;