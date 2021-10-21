import classes from "./Countdown.module.css";

function Countdown() {
  return (
    <section className={classes["countdown-container"]}>
      <h3>
        Coming <span>4 Nov 2020</span>
      </h3>
      <div className={classes["countdown-timer"]}>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>47</p>
          <p className={classes.text}>Days</p>
        </div>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>07</p>
          <p className={classes.text}>Hours</p>
        </div>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>56</p>
          <p className={classes.text}>Min</p>
        </div>
        <div className={classes["countdown-square"]}>
          <p className={classes.number}>14</p>
          <p className={classes.text}>Sec</p>
        </div>
      </div>
      <button>Get Started</button>
    </section>
  );
}

export default Countdown;
