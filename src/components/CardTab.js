import React from "react";
import {
  TabPane,
  Card,
  CardHeader,
  CardTitle,
  CardText,
  Button
} from "react-bootstrap";

export default function CardTab(props) {
  return (
    <TabPane eventKey="third">
      <Card border="primary" style={{ width: "90%" }}>
        <Card.Header>Method Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Title>Example</Card.Title>
          <Card.Text>
            <pre>
              {`function exampleFunction() {\n  console.log("not logging to console")\n}`}
            </pre>
            <pre>{`
              function exampleFunction() {
                console.log("not logging to console")
              }
              `}</pre>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </TabPane>
  );
}
