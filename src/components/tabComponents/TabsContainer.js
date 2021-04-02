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
// import Appbar from "./Appbar.js";import JavascriptMethodTabPane from "./JavascriptMethodTabPane.js";
import { tabData } from "./TabData.js";

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

  // const horizontalTabs = (
  //   <Tabs defaultActiveKey="first" transition={false} id="noanim-tab-example">
  //     <Tab eventKey="first" title="First">
  //       <CardTab />
  //     </Tab>
  //     <Tab eventKey="second" title="second">
  //       <CardTab />
  //     </Tab>
  //     <Tab eventKey="third" title="Third" disabled>
  //       <CardTab />
  //     </Tab>
  //   </Tabs>
  // );

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
