import React from "react";

const styles = {
    nameStyle: {
        fontSize: "14px",
        color: "white"
    }, 
    footerStyle: {
        justifyContent: "center"
    }
}

function Footer() {
    return (
        <footer className="navbar fixed-bottom bg-dark" style={styles.footerStyle}>
            <p style={styles.nameStyle}>&copy; 2021 Sam McMillan</p>
        </footer>
    )
}

export default Footer;