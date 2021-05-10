import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h3>404 page not found</h3>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
