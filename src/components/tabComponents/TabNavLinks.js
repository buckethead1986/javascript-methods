import React, { useState } from "react";
import { ListGroup, Collapse } from "react-bootstrap";

export default function TabsContainer(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <ListGroup.Item
        action
        eventKey={`${props.name.toLowerCase()}-0`}
        onClick={() => setOpen(!open)}
      >
        {props.name}
      </ListGroup.Item>
      <Collapse in={open}>
        <ListGroup>{props.navLinks}</ListGroup>
      </Collapse>
    </div>
  );
}
