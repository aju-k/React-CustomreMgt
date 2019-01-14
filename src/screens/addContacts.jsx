import React from "react";
import {
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Form,
  Button
} from "semantic-ui-react";
import { Link, Router, Redirect } from "react-router-dom";

class AddContacts extends React.Component {
  state = {
    name: "",
    email: "",
    contact: ""
  };

  handelOnChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addContacts = () => {
    let newContact = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact
    };
    this.props.addContacts(newContact, "List");

    this.setState({ redirectTo: "/list" });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} />;
    }

    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            name="name"
            onChange={this.handelOnChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Last Name"
            name="email"
            onChange={this.handelOnChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Contact </label>
          <input
            placeholder="Contact"
            type="number"
            name="contact"
            onChange={this.handelOnChange}
          />
        </Form.Field>
        <Button primary onClick={this.addContacts}>
          Submit
        </Button>
        <Button>Cancel</Button>
      </Form>
    );
  }
}

export default AddContacts;
