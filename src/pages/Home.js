import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1>welcome to my page</h1>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;