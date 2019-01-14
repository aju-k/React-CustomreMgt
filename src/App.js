import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/navbar";
import { Route, Link } from "react-router-dom";
import AddContacts from "./screens/addContacts";
import { Menu } from "semantic-ui-react";
import List from "./screens/list";
import { Container } from "./components/styles";

class App extends Component {
  state = {
    contacts: [],
    activeItem: "Add"
  };

  addContacts = (newContact, itemName) => {
    console.log("Adding new  Contacts");
    let contactArr = this.state.contacts;
    contactArr.push(newContact);
    this.setState({ contacts: contactArr, activeItem: itemName });
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    return (
      <div className="App">
        <Menu>
          <Link to={{ pathname: "/add", state: { ...this.state } }}>
            <Menu.Item
              name="Add"
              active={activeItem === "Add"}
              onClick={this.handleItemClick}
            >
              Add Contact
            </Menu.Item>
          </Link>
          <Link to="/list">
            <Menu.Item
              name="List"
              active={activeItem === "List"}
              onClick={this.handleItemClick}
            >
              View Contacts
            </Menu.Item>
          </Link>
        </Menu>
        <Container>
          <Route
            path="/Add"
            render={props => (
              <AddContacts addContacts={this.addContacts} {...props} exact />
            )}
          />
          <Route
            path="/List"
            render={routeParms => (
              <List {...this.state} {...routeParms} exact />
            )}
          />
        </Container>
      </div>
    );
  }
}

export default App;
