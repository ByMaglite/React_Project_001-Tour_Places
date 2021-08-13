import React from "react";
import styles from "./Navbar.module.css"

function Navbar() {  
    return(
        <div className={styles["navbar"]}>
            <div >
                <a href="https://github.com/ByMaglite" target="_blank" className={styles["navbar-item"]}>About Us</a>
                <a href="#" className={styles["navbar-item"]}>ForYou</a>
                <a href="#" className={styles["navbar-item"]}>Services</a>
                <a href="#" className={styles["navbar-item"]}>Blog</a>
                <a href="#" className={styles["navbar-item"]}>Vlog</a>
                <a href="https://github.com/ByMaglite" className={styles["navbar-item"]}>Contact</a>
            </div>
        </div>
    );
}

export default Navbar;