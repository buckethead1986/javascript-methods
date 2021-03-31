import React from "react";
import { TabPane, Card, Button, ListGroup } from "react-bootstrap";

export default function JavascriptMethodTabPane(props) {
  const subheadings = [];
  props.exampleCode.forEach(subheading => {
    subheadings.push(
      // <ListGroup.Item>
      //   <Card.Title>{subheading[0]}</Card.Title>
      //   <Card.Subtitle>{subheading[1]}</Card.Subtitle>
      //   <Card.Text>{<pre>{subheading[2]}</pre>}</Card.Text>
      // </ListGroup.Item>

      <div>
        <Card.Title>{subheading[0]}</Card.Title>
        <Card.Subtitle>{subheading[1]}</Card.Subtitle>
        <Card.Text>
          <pre>{subheading[2]}</pre>
        </Card.Text>
      </div>
    );
  });
  return (
    <TabPane eventKey={props.eventKey}>
      <Card border="primary" style={{ width: "90%" }}>
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {/*<ListGroup variant="flush">{subheadings}</ListGroup>*/}
          {subheadings}
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </TabPane>
  );
}
