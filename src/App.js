import './App.css';
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import NoMatch from "./pages/NoMatch.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
