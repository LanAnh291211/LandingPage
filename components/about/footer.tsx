// Footer.tsx
import React from "react";
import styles from "./footer.module.scss"; // Import your CSS module

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <img src="/images/site/thai.svg" alt="Thai Icon" />
            <img src="/images/site/insta.svg" alt="Instagram Icon" />
            <img src="/images/site/face.svg" alt="Facebook Icon" />
        </footer>
    );
};

export default Footer;
