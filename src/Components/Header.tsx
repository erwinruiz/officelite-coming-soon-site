import classes from "./Header.module.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  const logoHandler = () => {
    history.push("/");
  };

  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src="./assets/shared/logo.svg"
        alt="logo"
        onClick={logoHandler}
      />
    </header>
  );
}

export default Header;
