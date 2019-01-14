import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Link, Router } from "react-router-dom";

const SideBar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
    >
      <Link to="/list">
        <Menu.Item as="a">
          <Icon name="list" />
          List
        </Menu.Item>
      </Link>
      <Link to="/add">
        <Menu.Item as="a">
          <Icon name="add" />
          Add
        </Menu.Item>
      </Link>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as="h3">Application Content</Header>
        <Image src="/images/wireframe/paragraph.png" />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default SideBar;
