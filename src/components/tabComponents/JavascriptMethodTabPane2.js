import React from "react";
import { TabPane, Card, Button, ListGroup } from "react-bootstrap";

export default function JavascriptMethodTabPane(props) {
  const anchorLinks = [];
  console.log(props);

  //inserts dividing line between items
  const listGroup = props.sections.map(section => {
    anchorLinks.push(
      <li>
        <a
          style={{ textDecoration: "underline blue", cursor: "pointer" }}
          onClick={event => scrollToHash(section.id)}
        >
          {section.title}
        </a>
      </li>
    );
    const code = section.map(item => {
      return (
        <ListGroup.Item id={section.id}>
          <pre style={{ padding: "1%", backgroundColor: "#eee" }}>
            {item.code}
          </pre>
          {item.description}
        </ListGroup.Item>
      );
    });
    return (
      <ListGroup.Item id={section.id}>
        <h5>{section.title}</h5>
        {code}
      </ListGroup.Item>
    );
  });

  function scrollToHash(hashName) {
    var anchorlink = document.getElementById(hashName);
    anchorlink.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <TabPane eventKey={props.eventKey}>
      <Card border="primary" style={{ width: "90%" }}>
        <Card.Header>{props.name}</Card.Header>

        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          {props.sections.length > 1 ? (
            <div>
              <Card.Text style={{ marginBottom: 0 }}>Sections:</Card.Text>
              <ul style={{ marginBottom: 0 }}>{anchorLinks}</ul>
            </div>
          ) : (
            ""
          )}
        </Card.Body>
        {listGroup}
      </Card>
    </TabPane>
  );
}
