import React from "react";
import { Card } from "semantic-ui-react";

class List extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.contacts.map(contact => (
          <Card
            header={contact.name}
            meta={contact.email}
            description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          />
        ))}
      </div>
    );
  }
}

export default List;
