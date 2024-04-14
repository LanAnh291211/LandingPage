import React, { useState } from 'react';
import Logo from './logo';
import Link from 'next/link';
import classes from './main-navigation.module.css';
import Drawer from './drawer';
function MainNavigation() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };
  const handleDrawerClose = () => {

    setIsDrawerOpen(false);

  };
  return (
    <header className={classes.header}>
      <div className={classes.menu} onClick={toggleDrawer}>
        <img src='/images/site/menu.png' alt='Menu' />
      </div>
      <nav className={classes.menunav}>
        <ul>
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
      <Link href='/'>
          <Logo />
      </Link>
     <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}  />
    </header>
  );
}
export default MainNavigation;
