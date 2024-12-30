import React from "react";
import styles from "./Navbar.module.css";
import {FaSearch} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.netflixLogo}>Netflix Clone</h1>
            <div className={styles.searchbar}>
                <FaSearch className={styles.searchIcon} />
                <input
                    type="text"
                    placeholder="Search"
                    className={styles.searchInput}
                />
            </div>
        </nav>
    );
};

export default Navbar;