import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
}

export default App;
