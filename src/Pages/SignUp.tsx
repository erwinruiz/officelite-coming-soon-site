import { Fragment } from "react";
import Countdown from "../Components/Countdown";
import classes from "./SignUp.module.css";

function SignUp() {
  return (
    <Fragment>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src="./assets/shared/logo.svg"
          alt="logo"
        />
      </header>
      <main className={classes.main}>
        <h1 className={classes.title}>Work smarter. Save time.</h1>
        <p className={classes["text-content"]}>
          Easily manage your projects. Get on the list and receive in-app perks
          available only to early subscribers. We are moving into final
          development and getting ready for official launch soon.
        </p>
        <Countdown needButton={false} />
      </main>
    </Fragment>
  );
}

export default SignUp;
