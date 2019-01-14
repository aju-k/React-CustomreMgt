import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, Redirect } from "react-router-dom";
import AddContacts from "./screens/addContacts";
import { Menu, Grid, Segment } from "semantic-ui-react";
import List from "./screens/list";
import { Container } from "./components/styles";

class App extends Component {
  state = {
    contacts: [],
    activeItem: "Add"
  };

  addContacts = newContact => {
    console.log("Adding new  Contacts");
    let contactArr = this.state.contacts;
    contactArr.push(newContact);

    this.setState({ contacts: contactArr });
    console.log("contactArr =>", contactArr);
  };

  // handleItemClick = event => {
  //   this.setState({ redirectTo: event.targe.url });
  // };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    // if (activeItem) {
    //   return <Redirect to={activeItem} />;
    // }
    console.log("Contact List =>", this.state);
    return (
      <Container>
        <div className="App">
          <Grid>
            <Grid.Column width={4}>
              <Menu fluid vertical tabular>
                <Menu.Item
                  name="Add Contacts"
                  active={activeItem === "Add Contacts"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name="View Contacts"
                  active={activeItem === "View Contacts"}
                  onClick={this.handleItemClick}
                />
              </Menu>
            </Grid.Column>

            <Grid.Column stretched width={12}>
              <Segment>
                {this.state.activeItem == "View Contacts" ? (
                  <List {...this.state} />
                ) : (
                  <AddContacts addContacts={this.addContacts} />
                )}

                {/* <Route
                path="/Add"
                render={props => (
                  <AddContacts
                    addContacts={this.addContacts}
                    {...props}
                    exact
                  />
                )}
              />
              <Route
                path="/List"
                render={routeParms => (
                  <List {...this.state} {...routeParms} exact />
                )}
              /> */}
              </Segment>
            </Grid.Column>
            <Segment>
              <List {...this.state} />
            </Segment>
          </Grid>

          {/* <Link to={{ pathname: "/list", state: { ...this.state } }}>
          List of contacts
        </Link> */}
          {/* <Link to="/add"> Add </Link> */}
        </div>
      </Container>
    );
  }
}

export default App;
