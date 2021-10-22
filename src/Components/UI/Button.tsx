import classes from "./Button.module.css";
import { Button as TypeButton } from "../helpers/types";

function Button(props: TypeButton) {
  return (
    <button className={`${classes.button} ${props.className}`}>
      {props.text}
    </button>
  );
}

export default Button;
