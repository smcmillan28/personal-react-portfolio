import React from "react";
import Card from "../components/Card";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import projects from "../projects.json";

function Projects() {
    return (
        <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h3>scroll down to see a list of projects</h3>
                    </Jumbotron>
                </Col>
            </Row>
            {projects.map(project => {
                return (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        github={project.github}
                        deployed={project.deployed}
                    />
                );
            })}
        </Container>
    )
}

export default Projects;