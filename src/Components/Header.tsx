import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src="./assets/shared/logo.svg" alt="logo" />
    </header>
  );
}

export default Header;
