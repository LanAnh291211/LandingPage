import React from "react";
import Link from "next/link";
import classes from "./drawer.module.scss";

const Drawer = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`${classes.drawe} ${isOpen ? classes.open : classes.close}`}
    >
      <div className={`${classes.draw} `}>
        <div className={classes.head}>
          <button onClick={onClose}>
            <img src="/images/site/close.svg" alt="contact" />
          </button>
          <img
            className={classes.logo}
            src="/images/site/logo.png"
            alt="logo"
          />
        </div>
        <nav className={classes.navdraw}>
          <ul className={classes.list}>
            <li>
              <Link href="/posts" onClick={onClose}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={onClose}>
                Let’s Shuffle
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={onClose}>
                Buy Card
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={onClose}>
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Drawer;
