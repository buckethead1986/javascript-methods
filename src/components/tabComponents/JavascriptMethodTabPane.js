import React from "react";
import { TabPane, Card, Button, ListGroup } from "react-bootstrap";

export default function JavascriptMethodTabPane(props) {
  const anchorLinks = [];
  // const subheadings = [];
  // props.sections.forEach(subheading => {
  //   subheadings.push(
  //     <ListGroup.Item>
  //       <Card.Title>{subheading[0]}</Card.Title>
  //       <Card.Subtitle>{subheading[1]}</Card.Subtitle>
  //       <Card.Text>{<pre>{subheading[2]}</pre>}</Card.Text>
  //     </ListGroup.Item>
  //
  //     // <div>
  //     //   <Card.Title>{subheading[0]}</Card.Title>
  //     //   <Card.Subtitle>{subheading[1]}</Card.Subtitle>
  //     //   <Card.Text>
  //     //     <pre>{subheading[2]}</pre>
  //     //   </Card.Text>
  //     // </div>
  //   );
  // });

  //inserts dividing line between items
  const listGroup = props.sections.map(section => {
    anchorLinks.push(
      <li onClick={event => scrollToHash(section.id)}>{section.title}</li>
    );
    return (
      <ListGroup.Item id={section.id}>
        <h5>{section.title}</h5>
        <p>{section.description}</p>
        <pre style={{ padding: "1%", backgroundColor: "#eee" }}>
          {section.code}
        </pre>
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
              <Card.Text>Sections (Click to scroll to the section):</Card.Text>
              <ul>{anchorLinks}</ul>
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
