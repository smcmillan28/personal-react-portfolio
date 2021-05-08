import React from "react";

// Defining styles for card component
const styles = {
    cardStyle: {
        width: "60%",
        margin: "auto",
        marginTop: "15px",
        border: "2px solid black",
        borderRadius: "6px",
        backgroundColor: "lightgoldenrodyellow"
    },
    buttonStyle: {
        margin: "5px"
    }
}

function Card(props) {
    return (
        <div className="card" style={styles.cardStyle} id={props.id}>
            <a><img src={props.image} className="card-img-top" alt="project"></img></a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a style={styles.buttonStyle} href={props.deployed} className="btn btn-outline-dark" target="_blank">Deployed App</a>
                    <a href={props.github} className="btn btn-outline-dark" target="_blank">GitHub Repo</a>
                </div>
        </div>
    )
}

export default Card;