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
import TabNavLinks from "./TabNavLinks.js";
import { tabData } from "./TabData.js";
import { arrayMethodsData } from "./ArrayMethodsData.js";

export default function TabsContainer() {
  const navLinksArray = { array: [], number: [], string: [] };
  const navLinksArray2 = { array: [], number: [], string: [] };

  // const createTabPanes = arrayMethodsData[1].methods.map(card => {
  //   navLinksArray.push(
  //     <NavItem>
  //       <NavLink eventKey={`${arrayMethodsData[1].eventKey}-${card.eventKey}`}>
  //         {card.name}
  //       </NavLink>
  //     </NavItem>
  //   );
  //   return (
  //     <JavascriptMethodTabPane
  //       eventKey={`${arrayMethodsData[1].eventKey}-${card.eventKey}`}
  //       name={card.name}
  //       description={card.description}
  //       sections={card.sections}
  //     />
  //   );
  // });
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

  const createGenericTabPanes = object => {
    console.log(object, object.eventKey);
    object.methods.map(method => {
      navLinksArray[object.eventKey].push(
        <NavItem>
          <NavLink eventKey={`${object.eventKey}-${method.eventKey}`}>
            {method.name}
          </NavLink>
        </NavItem>
      );
      return (
        <JavascriptMethodTabPane
          eventKey={`${object.eventKey}-${method.eventKey}`}
          name={method.name}
          description={method.description}
          sections={method.sections}
        />
      );
    });
  };

  //maps over each dataTypes methods(array, number, string, etc), returning a TabPane for each and a corresponding nav component, pushed to an array.
  // `${dataType.eventKey}-${card.eventKey}` evaluates to 'array-0' or 'number-8', based on the type of data and array index.
  const createTabPanes2 = arrayMethodsData.map(dataType => {
    return dataType.methods.map(card => {
      navLinksArray2[dataType.eventKey].push(
        <NavItem>
          <NavLink eventKey={`${dataType.eventKey}-${card.eventKey}`}>
            {card.name}
          </NavLink>
        </NavItem>
      );
      return (
        <JavascriptMethodTabPane
          eventKey={`${dataType.eventKey}-${card.eventKey}`}
          name={card.name}
          description={card.description}
          sections={card.sections}
        />
      );
    });
  });

  // <ListGroup> and <Collapse> should be unique for each tab 'dropdown' (array, number, string, etc)
  return (
    <TabContainer id="left-tabs-example" defaultActiveKey={"array-1"}>
      <Row>
        <Col sm={2}>
          <ListGroup>
            <TabNavLinks name="Array" navLinks={navLinksArray2.array} />
            <TabNavLinks name="Number" navLinks={navLinksArray2.number} />

            <div>
              <ListGroup.Item action href="#link3">
                String
              </ListGroup.Item>
            </div>
          </ListGroup>
        </Col>
        <Col sm={10}>
          <TabContent>{createGenericTabPanes(arrayMethodsData[0])}</TabContent>
        </Col>
      </Row>
    </TabContainer>
  );
}
