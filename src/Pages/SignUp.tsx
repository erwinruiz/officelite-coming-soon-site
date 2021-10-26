import { Fragment } from "react";
import Countdown from "../Components/Countdown";
import Form from "../Components/Form";
import Header from "../Components/Header";
import classes from "./SignUp.module.css";

function SignUp() {
  return (
    <Fragment>
      <Header />
      <main className={classes.main}>
        <h1 className={classes.title}>Work smarter. Save time.</h1>
        <p className={classes["text-content"]}>
          Easily manage your projects. Get on the list and receive in-app perks
          available only to early subscribers. We are moving into final
          development and getting ready for official launch soon.
        </p>
        <Countdown needButton={false} />
        <Form />
      </main>
    </Fragment>
  );
}

export default SignUp;
