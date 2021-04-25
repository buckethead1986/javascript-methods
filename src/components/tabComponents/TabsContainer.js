import React from "react";
import {
  Row,
  Col,
  TabContainer,
  TabContent,
  Nav,
  NavItem,
  NavLink
} from "react-bootstrap";
import JavascriptMethodTabPane from "./JavascriptMethodTabPane.js";
import { tabData } from "./data/TabData.js";
import { arrayMethodsData } from "./data/ArrayMethodsData.js";

export default function TabsContainer() {
  const navLinksArray = [];

  const createTabPanes = tabData.map(card => {
    navLinksArray.push(
      <NavItem>
        <NavLink eventKey={card.eventKey}>{card.name}</NavLink>
      </NavItem>
    );
    return (
      <JavascriptMethodTabPane
        eventKey={card.eventKey}
        name={card.name}
        description={card.description}
        sections={card.sections}
      />
    );
  });

  return (
    <TabContainer id="left-tabs-example" defaultActiveKey={1}>
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            {navLinksArray}
          </Nav>
        </Col>
        <Col sm={10}>
          <TabContent>{createTabPanes}</TabContent>
        </Col>
      </Row>
    </TabContainer>
  );
}
