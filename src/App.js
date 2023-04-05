import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import About from "./Components/About";
import "./App.css";

export default function App() {
  return (
    <Container fluid className="App">
      <Router>
        <div>
          {/* links will change the url when clicked */}
          <ButtonGroup>
            <Button variant="outline-dark">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-dark">
              <Link to="/Order">Order</Link>
            </Button>
            <Button variant="outline-dark">
              <Link to="/Menu">Menu</Link>
            </Button>
            <Button variant="outline-dark">
              <Link to="/About">About</Link>
            </Button>
          </ButtonGroup>

          {/* routes to render different components based on the url */}
          <Switch>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Menu">
              <Menu />
            </Route>
            <Route path="/Order">
              <Order />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

