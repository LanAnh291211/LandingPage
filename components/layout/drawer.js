import React from 'react';
import Link from 'next/link';
import classes from './drawer.module.css';

const Drawer = ({ isOpen ,onClose }) => {

  return (
    <div className={`${classes.drawe} ${isOpen ? classes.open : classes.close}`}>
      <div className={`${classes.draw} `}>
      <div className={classes.head}>
        <button onClick={onClose}>
        <img src='/images/site/close.svg' alt='contact' />
        </button>
        <img className= {classes.logo} src='/images/site/logo.png' alt='logo' />
      </div>
      <nav className={classes.navdraw}>
        <ul className={classes.list}>
          <li>
            <Link href='/posts'>Home</Link>
          </li>
          <li>
            <Link href='/contact'>Let’s Shuffle</Link>
          </li>
          <li>
            <Link href='/contact'>Buy Card</Link>
          </li>
          <li>
            <Link href='/contact'>Profile</Link>
          </li>
        </ul>
      </nav>
    </div>
    </div>
    
  );
};
export default Drawer;
