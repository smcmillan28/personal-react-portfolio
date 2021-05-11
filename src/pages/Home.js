import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h3>welcome.</h3>
                    </Jumbotron>
                </Col>
            </Row>
            <Row>
                <Col size="md-6">
                    <ul style={{ textAlign: "center" }} class="list-group">
                        <li class="list-group-item list-group-item-action list-group-item-success">check out a list of my projects by clicking the projects tab</li>
                        <li class="list-group-item list-group-item-action list-group-item-success">read a little bit about me by clicking the about me tab</li>
                        <li class="list-group-item list-group-item-action list-group-item-success">pretty simple...</li>
                    </ul>
                </Col>
                <Col size="md-6">
                    <ul style={{ textAlign: "center" }} class="list-group">
                        <a href="https://www.linkedin.com/in/sam-mcmillan-1b86558a/" class="list-group-item list-group-item-action list-group-item-primary" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://github.com/smcmillan28" class="list-group-item list-group-item-action list-group-item-primary" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.instagram.com/2sammy8/" class="list-group-item list-group-item-action list-group-item-primary" target="_blank" rel="noreferrer">Instagram</a>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;