import classes from "./Home.module.css";
import { Fragment } from "react";
import Card from "../Components/Card";
import { cards } from "../db/index";
import Countdown from "../Components/Countdown";
import Button from "../Components/UI/Button";
import { useHistory } from "react-router-dom";
import Header from "../Components/Header";

function Home() {
  const history = useHistory();

  const signUpHandler = () => {
    history.push("/signup");
  };

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <section className={classes["first-section"]}>
          <img
            className={classes.charts}
            src="./assets/home/illustration-charts.svg"
            alt="illustration charts"
          />
          <div className={classes["section-text"]}>
            <h1 className={classes.title}>
              A simple solution to complex tasks is coming soon
            </h1>
            <p className={classes["text-content"]}>
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </p>
            <Button
              text="Get Started"
              className={classes.button}
              onClick={signUpHandler}
            />
          </div>
        </section>
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
        <Countdown needButton={true} />
      </main>
    </Fragment>
  );
}

export default Home;
