import './App.css';

import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Dropdown, DropdownButton } from "react-bootstrap";
import VotingAndRegistrationRates from './nslve_visualization_components/VotingAndRegistrationRates';
import VotingByAge from './nslve_visualization_components/VotingByAge';
import Overview from './view_components/Overview';

function App() {

  const dropDownValues = [
    "Voting and Registration Rates",
    "Voting by Age"
  ];

  const [selectedViz, setSelectedViz] = useState("Voting and Registration Rates");

  const renderViz = () => {
    if(selectedViz === "Voting and Registration Rates") {
      return <VotingAndRegistrationRates />;
    }
    else if(selectedViz === "Voting by Age") {
      return <VotingByAge />;
    }
    else {
      return <div>No such vizualization {selectedViz}</div>;
    }
  }

  const onSelectViz = (e, val) => {
    setSelectedViz(val);
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light">
        <Container fluid>
          <Navbar.Brand href="#home">📝 NSLVE Interactive</Navbar.Brand>
        </Container>
      </Navbar>

      <br/>
      <br/>

      <Container fluid>
        <Row>
          <Col>
            <Overview />
          </Col>
        </Row>

        <br/>
        <br/>
        <br/>

        <Row>
          <Col lg={12}>
          <DropdownButton variant="info" id="dropdown-basic-button" title={selectedViz}>
            {dropDownValues.map((val) => {
              return (
                <Dropdown.Item 
                  key={val}
                  value={val}
                  onClick={(e) => {onSelectViz(e, val)}}
                >
                    {val}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          </Col>
        </Row>

        <br/>

        <Row>
          <Col lg={12}>
            {renderViz()}
          </Col>
        </Row>

        <br/>
        <br/>
        <br/>
      </Container>
    </div>
  );
}

export default App;
