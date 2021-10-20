import classes from "./Card.module.css";
import { Card as Props } from "./helpers/types";

function Card(props: Props) {
  const { planType, planPrice, planText, planListFeatures } = props;

  const cardClass = `${classes.card} ${
    planType === "Pro" ? classes["plan-type-pro"] : ""
  }`;

  return (
    <section className={cardClass}>
      <h2 className={classes["plan-type"]}>{planType}</h2>
      <h1 className={classes["plan-price"]}>{planPrice}</h1>
      <p className={classes["plan-text"]}>{planText}</p>
      <ul className={classes["plan-list-features"]}>
        <li>{planListFeatures.first}</li>
        <li>{planListFeatures.second}</li>
        <li>{planListFeatures.third}</li>
      </ul>
      <button className={classes.button}>Try for Free</button>
    </section>
  );
}

export default Card;
