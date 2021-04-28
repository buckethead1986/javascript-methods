import React, { useState } from "react";
import { Row, Col, ListGroup, TabContainer, TabContent } from "react-bootstrap";
import JavascriptMethodTabPane from "./JavascriptMethodTabPane.js";
import JavascriptMethodTabPane2 from "./JavascriptMethodTabPane2.js";
import TabNavLinks from "./TabNavLinks.js";
import { arrayMethodsData } from "./data/ArrayMethodsData.js";
import { numberMethodsData2 } from "./data/NumberMethodsData2.js";

export default function TabsContainer() {
  const navLinksArray = { array: [], number: [], string: [] };

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
    return object.methods.map((method, index) => {
      if (index !== 0) {
        navLinksArray[object.eventKey].push(
          <ListGroup.Item
            action
            eventKey={`${object.eventKey}-${method.eventKey}`}
          >
            {method.name}
          </ListGroup.Item>
        );
      }
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
  const createGenericTabPanes2 = object => {
    console.log(object);
    return object.tabs.map((tab, index) => {
      if (index !== 0) {
        navLinksArray[object.eventKey].push(
          <ListGroup.Item
            action
            eventKey={`${object.eventKey}-${tab.eventKey}`}
          >
            {tab.name}
          </ListGroup.Item>
        );
      }
      return (
        <JavascriptMethodTabPane2
          eventKey={`${object.eventKey}-${tab.eventKey}`}
          name={tab.name}
          description={tab.description}
          sections={tab.sections}
        />
      );
    });
  };

  //maps over each dataTypes methods(array, number, string, etc), returning a TabPane for each and a corresponding nav component, pushed to an array.
  // `${dataType.eventKey}-${card.eventKey}` evaluates to 'array-0' or 'number-8', based on the type of data and array index.
  // const createTabPanes2 = oldArrayMethodsData.map(dataType => {
  //   return dataType.methods.map(card => {
  //     navLinksArray2[dataType.eventKey].push(
  //       <ListGroup.Item
  //         action
  //         eventKey={`${dataType.eventKey}-${card.eventKey}`}
  //       >
  //         {card.name}
  //       </ListGroup.Item>
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

  return (
    <TabContainer id="left-tabs-example" defaultActiveKey={"array-0"}>
      <Row>
        <Col sm={2}>
          <ListGroup>
            <TabNavLinks name="Array" navLinks={navLinksArray.array} />
            <TabNavLinks name="Number" navLinks={navLinksArray.number} />
          </ListGroup>
        </Col>
        <Col sm={10}>
          <TabContent>{createGenericTabPanes(arrayMethodsData)}</TabContent>
          <TabContent>{createGenericTabPanes2(numberMethodsData2)}</TabContent>
        </Col>
      </Row>
    </TabContainer>
  );
}
