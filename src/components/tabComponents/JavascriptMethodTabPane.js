import React from "react";
import { TabPane, Card, Button, ListGroup } from "react-bootstrap";

export default function JavascriptMethodTabPane(props) {
  const anchorLinks = [];

  //inserts dividing line between items
  const listGroup = props.sections.map(section => {
    anchorLinks.push(
      <li>
        <a
          style={{ textDecoration: "underline blue", cursor: "pointer" }}
          onClick={event =>
            scrollToHash(`${props.eventKey}-${section.sectionTitle}`)}
        >
          {section.sectionTitle}
        </a>
      </li>
    );

    const subsections = section.subsections.map(subsection => {
      return (
        <div style={{ marginBottom: "1%" }}>
          {subsection.title}
          <pre style={{ padding: "1%", margin: 0, backgroundColor: "#eee" }}>
            {subsection.code}
          </pre>
          {subsection.description}
        </div>
      );
    });

    return (
      <ListGroup.Item id={`${props.eventKey}-${section.sectionTitle}`}>
        <h5>{section.sectionTitle}</h5>
        {subsections}
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
