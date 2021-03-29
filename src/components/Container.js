import React from "react";
import {
  Row,
  Col,
  Tabs,
  Tab,
  TabContainer,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from "react-bootstrap";
import Appbar from "./Appbar.js";

function Container() {
  return (
    <div>
      <Appbar />
      <TabContainer id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <NavItem>
                <NavLink eventKey="first">Tab 1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink eventKey="second">Tab 2</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <TabContent>
              <TabPane eventKey="first">
                <p>First Content</p>
              </TabPane>
              <TabPane eventKey="second">
                <p>Second Content</p>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
}

export default Container;
