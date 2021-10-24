import classes from "./Countdown.module.css";
import Button from "./UI/Button";
import { Countdown as TypeCountdown } from "./helpers/types";
import { useHistory } from "react-router-dom";

function Countdown(props: TypeCountdown) {
  const { needButton } = props;
  const history = useHistory();

  const signUpHandler = () => {
    history.push("/signup");
  };

  return (
    <section
      className={`${classes["countdown-container"]} ${
        !needButton && classes["sign-up"]
      }`}
    >
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
      {needButton && (
        <Button
          text="Get Started"
          className={classes.button}
          onClick={signUpHandler}
        />
      )}
    </section>
  );
}

export default Countdown;
