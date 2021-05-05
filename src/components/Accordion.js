import React from "react";

export function AccordionWrapper({ children }) {
    return(
        <div class="accordion" id="projectAccordion">{children}</div>
    )
}

export function AccordionItem(props) {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {props.title}
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <img src={props.image} alt="project"></img>
                    <p>{props.description}</p>
                    <a href={props.github}>GitHub Repo </a>
                    <a href={props.deployed}>Deployed App</a>
                </div>
            </div>
        </div>
    )
};