import "./App.css";
import Signin from "./signin";
import Signup from "./signup";
import { Route, Switch } from "react-router-dom";

function App() {
 

 

  return (
    <>
      <Signin />
      {/* <Switch>
        <Route exact path="/SignUp" component={Signup} />
        {/* <Route /> */}
      {/* </Switch> */}

      {/* <Signup /> */}
    </>
  );
}

export default App;
