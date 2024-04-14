// Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Import your CSS module
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src='/images/site/thai.svg' alt='Thai Icon' />
            <img src='/images/site/insta.svg' alt='Instagram Icon' />
            <img src='/images/site/face.svg' alt='Facebook Icon' />
        </footer>
    );
};
export default Footer;
