import logo from "./logo.svg";
import "./App.css";
import Button from "./forms/Button";
import Login from "./page/Login";
import { signInWithGoogle } from "./firebase/util";
import { Route, Switch } from "react-router-dom";
import HomepageLayout from "./Layouts/HomepageLayout";
import Homepage from "./page/Homepage";
import MainLayout from "./Layouts/MainLayout";
import { render } from "@testing-library/react";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomepageLayout>
                <Homepage />
              </HomepageLayout>
            )}
          />
          <Route
            exact
            path="/registration"
            render={() => (
              <MainLayout>
                <Homepage />
              </MainLayout>
            )}
          />
          <Route
            exact
            path="/login"
            render={() => (
              <MainLayout>
                <Login />
              </MainLayout>
            )}
          />
        </Switch>
        {/* <Login />
        <button onClick={signInWithGoogle}>Oi gan</button>
        <Button onClick={signInWithGoogle}>Klik bang</Button>
        <Button variant="primary" type="submit">
          Bootstrap
        </Button> */}
      </div>
    );
  }
}

export default App;
