import React from "react";

const styles = {
    cardStyle: {
        margin: "auto",
        marginTop: "15px",
        width: "70%",
        backgroundColor: "lightgoldenrodyellow"
    },
    imageStyle: {
        height: "200px",
        width: "200px",
        borderRadius: "5px"
    }
}

function About() {
    return (
        <div className="card" style={styles.cardStyle}>
            <div className="card-body">
                <h3 className="card-title">About Me</h3>
                <div className="content">
                    <p>
                        My name is Sam McMillan. Thank you for visiting my page. It will give you a brief overview of my
                        background, my capabilities, and my interests. I am currently an Operations Manager for Coyote
                        Logistics, a global 3PL and subsidiary of UPS.
                        While working for Coyote, I have had the opportunity to live and work in multiple locations
                        across
                        the country, including Chicago, IL, Chattanooga, TN, and Knoxville, TN.
                        I recently moved to Atlanta to take on a new role in our office there.
                    </p>
                    <p>
                        I took the opportunity to enroll in the Coding Bootcamp at Georgia Tech to learn a new skillset, to
                        open potential career opportunties, and to challenge myself mentally. In today's world,
                        understanding web development and the languages of the internet is a very important thing
                        to know. I have learned the basics of full stack web development (mobile-responsive web design,
                        JavaScript, OOP, DOM manipulation, API interaction, RESTful APIs, Express server interaction, SQL).
                    </p>
                    <p>
                        Primary technologies learned: HTML/CSS; JavaScript/jQuery; MySQL; Node.js; Handlebars; Heroku; React; mongoDB
                    </p>
                </div>
                <div>
                    <p className="title is-4"><strong>Let's Connect!</strong></p>
                    <div className="content">
                        <p>Email: smcmillan1991@gmail.com</p>
                        <p>Phone: (404) 403-9716</p>
                        <p>Link to <a href="https://smcmillan28.github.io/resume/" target="_blank" rel="noreferrer">resume</a></p>
                    </div>
                    <img style={styles.imageStyle} src="./images/profile.JPG" className="card-img-top" alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default About;