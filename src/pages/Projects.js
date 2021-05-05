import React from "react";
import { AccordionWrapper, AccordionItem } from "../components/Accordion.js";
import projects from "../projects.json";

function Projects() {
    return (
        <AccordionWrapper>
            {projects.map(project => {
                return(
                    <AccordionItem
                        key={project.id}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        github={project.github}
                        deployed={project.deployed}
                    />
                );
            })}
        </AccordionWrapper>
    )
}

export default Projects;