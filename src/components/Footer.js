import React from "react";

const styles = {
    nameStyle: {
        fontSize: "14px",
        color: "white"
    },
    footerStyle: {
        justifyContent: "center",
        marginTop: "10px"
    }
}

function Footer() {
    return (
        <div>
            <footer className="navbar fixed-bottom bg-dark" style={styles.footerStyle}>
                <p style={styles.nameStyle}>&copy; 2021 Sam McMillan</p>
            </footer>
        </div>
    )
}

export default Footer;