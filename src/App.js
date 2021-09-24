// import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavBar, Topnav } from "./components";
// import { Context } from "./context/context";
import { About, Home, Service } from "./screens";

function App() {
  //  const {user} = useContext(Context);
  return (
    <div >
      <Router>
        <Topnav/>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/services" component={Service}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
