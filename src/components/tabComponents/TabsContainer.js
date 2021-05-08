import React, { useState } from "react";
import { Row, Col, ListGroup, TabContainer, TabContent } from "react-bootstrap";
import JavascriptMethodTabPane from "./JavascriptMethodTabPane.js";
import TabNavLinks from "./TabNavLinks.js";
import { arrayMethodsData } from "./data/ArrayMethodsData.js";
import { numberMethodsData } from "./data/NumberMethodsData.js";

export default function TabsContainer() {
  const navLinksArray = { array: [], number: [], string: [] };

  const createGenericTabPanes = object => {
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
        <JavascriptMethodTabPane
          eventKey={`${object.eventKey}-${tab.eventKey}`}
          name={tab.name}
          description={tab.description}
          sections={tab.sections}
        />
      );
    });
  };

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
          <TabContent>{createGenericTabPanes(numberMethodsData)}</TabContent>
          <TabContent>{createGenericTabPanes(arrayMethodsData)}</TabContent>
        </Col>
      </Row>
    </TabContainer>
  );
}
