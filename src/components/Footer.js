import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
    nameStyle: {
        fontSize: "18px"
    }
}

function Footer() {
    return (
        <footer className="footer bottom">
            <div className="content has-text-centered">
                <sup style={styles.nameStyle}>&copy; 2021 Sam McMillan</sup>
                <span className="social">
                    <a href="https://www.instagram.com/2sammy8/" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/sam-mcmillan-1b86558a/" target="_blank"><i
                        className="fab fa-linkedin-in"></i></a>
                    <a href="https://github.com/smcmillan28" target="_blank"><i className="fab fa-github"></i></a>
                </span>
            </div>
        </footer>
    )
}

export default Footer;