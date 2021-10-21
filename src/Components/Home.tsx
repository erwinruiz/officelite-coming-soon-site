import classes from "./Home.module.css";
import { Fragment } from "react";
import Card from "./Card";
import { cards } from "../db/index";
import Countdown from "./Countdown";

function Home() {
  return (
    <Fragment>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src="./assets/shared/logo.svg"
          alt="logo"
        />
        <img
          className={classes.charts}
          src="./assets/home/illustration-charts.svg"
          alt="illustration charts"
        />
      </header>
      <main className={classes.main}>
        <h1 className={classes.title}>
          A simple solution to complex tasks is coming soon
        </h1>
        <p className={classes["text-content"]}>
          Say goodbye to inefficient juggling of multiple apps, teams, and
          projects. Officelite is the new collaboration platform built with an
          intuitive interface to improve productivity.
        </p>
        <button className={classes.button}>Get Started</button>
        <section className={classes["cards-container"]}>
          {cards.map((card, i) => (
            <Card
              key={i}
              planType={card.planType}
              planPrice={card.planPrice}
              planText={card.planText}
              planListFeatures={card.planListFeatures}
            />
          ))}
        </section>
        <Countdown />
      </main>
    </Fragment>
  );
}

export default Home;
