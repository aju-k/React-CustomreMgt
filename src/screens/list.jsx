import React from "react";
import { Card } from "semantic-ui-react";

class List extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.contacts.map(user => (
          <Card
            header={user.name}
            meta={user.email}
            description={`Please contact me on the following number ${user.contact}`}
          />
        ))}
      </div>
    );
  }
}

export default List;
