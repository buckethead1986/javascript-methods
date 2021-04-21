import React, { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  TabContainer,
  TabContent,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from "react-bootstrap";
import JavascriptMethodTabPane from "./JavascriptMethodTabPane.js";
import { tabData } from "./TabData.js";
import { arrayMethodsData } from "./ArrayMethodsData.js";

export default function TabsContainer(props) {
  const [open, setOpen] = useState(false);
  // const [open2, setOpen2] = useState(false);
  // const navLinksArray = [];
  // const navLinksArray2 = { array: [], number: [], string: [] };

  // const createTabPanes = arrayMethodsData[1].methods.map(card => {
  //   navLinksArray.push(
  //     <NavItem>
  //       <NavLink eventKey={`array-${card.eventKey}`}>{card.name}</NavLink>
  //     </NavItem>
  //   );
  //   return (
  //     <JavascriptMethodTabPane
  //       eventKey={`number-${card.eventKey}`}
  //       name={card.name}
  //       description={card.description}
  //       sections={card.sections}
  //     />
  //   );
  // });

  //maps over each dataTypes methods(array, number, string, etc), returning a TabPane for each and a corresponding nav component, pushed to an array.
  // `${dataType.eventKey}-${card.eventKey}` evaluates to 'array-0' or 'number-8', based on the type of data and array index.
  // const createTabPanes2 = arrayMethodsData.map(dataType => {
  //   return dataType.methods.map(card => {
  //     navLinksArray2[dataType.eventKey].push(
  //       <NavItem>
  //         <NavLink eventKey={`${dataType.eventKey}-${card.eventKey}`}>
  //           {card.name}
  //         </NavLink>
  //       </NavItem>
  //     );
  //     return (
  //       <JavascriptMethodTabPane
  //         eventKey={`${dataType.eventKey}-${card.eventKey}`}
  //         name={card.name}
  //         description={card.description}
  //         sections={card.sections}
  //       />
  //     );
  //   });
  // });

  // <ListGroup> and <Collapse> should be unique for each tab 'dropdown' (array, number, string, etc)
  return (
    <div>
      <ListGroup.Item action onClick={() => setOpen(!open)}>
        {props.name}
      </ListGroup.Item>
      <Collapse in={open}>
        <div id="example-collapse-text">{props.navLinks}</div>
      </Collapse>
    </div>
  );
}
