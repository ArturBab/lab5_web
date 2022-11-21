import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Users from "./components/Users";
import Amd from "./components/pages/amd";
import GetCards from "./components/pages/cards";
import MyComponent from "./components/pages/test";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


function App() {

  return (
      <>
          <Header/>
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                    <Route path="/users" component={Users} />
                    <Route path="/amd" component={Amd} />
                    <Route path="/cards" component={GetCards} />
                    <Route path="/test/" component={MyComponent} />
                </Switch>
            </Router>
      </>
  );
}

export default App;
