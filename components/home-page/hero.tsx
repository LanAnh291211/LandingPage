import React from "react";
import classes from "./hero.module.scss";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.overlay}>
        <div className={classes.content}>
          <p>What’s the future hold today?</p>
          <button>Start</button>
        </div>
        <div className={classes.image}>
          <img alt="An image showing " src="/images/site/all-see.png" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
