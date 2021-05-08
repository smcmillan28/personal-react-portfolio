import React from "react";
import Card from "../components/Card";
import { Container } from "../components/Grid";
import projects from "../projects.json";

function Projects() {
    return (
        <Container fluid>
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