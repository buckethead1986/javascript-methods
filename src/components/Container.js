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
import MethodTab from "./MethodTab.js";
import CardTab from "./CardTab.js";
import CardTab2 from "./CardTab2.js";

function Container() {
  const createTabPanes = () => {
    [
      {
        eventKey: "fourth",
        name: "TestName",
        description: "Asambi Sana Squash Banana",
        exampleCode: `function testFunction() {\nconst item = ['hey']\n console.log(item[0])}`
      },
      {
        eventKey: "fifth",
        name: "Fifth Method",
        description: "The monkey's his uncle?",
        exampleCode: `['there', 'once', 'was', 'a', 'man', 'from', 'nantucket'].join(' ')`
      }
    ].map(card => {
      return (
        <CardTab2
          eventKey={card.eventKey}
          name={card.name}
          description={card.description}
          exampleCode={card.exampleCode}
        />
      );
    });
  };
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
              <NavItem>
                <NavLink eventKey="third">Tab 3</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col sm={10}>
            <TabContent>
              <MethodTab />

              <TabPane eventKey="second">
                <p>Second Content</p>
              </TabPane>
              <CardTab />
              {createTabPanes}
            </TabContent>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
}

export default Container;
