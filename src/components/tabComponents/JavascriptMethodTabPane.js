import React from "react";
import { TabPane, Card, Button, ListGroup } from "react-bootstrap";
import styles from "./styles.module.css"; //Card.Text className={styles.less}. inline styling as style={{marginBottom:0}} also works

export default function JavascriptMethodTabPane(props) {
  const anchorLinks = [];

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
    return (
      <ListGroup.Item id={section.id}>
        <h5>{section.title}</h5>
        <pre style={{ padding: "1%", backgroundColor: "#eee" }}>
          {section.code}
        </pre>
        {section.description}
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
              <Card.Text className={styles.less}>Sections:</Card.Text>
              <ul className={styles.less}>{anchorLinks}</ul>
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
