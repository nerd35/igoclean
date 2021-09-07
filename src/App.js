// import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavBar, Topnav } from "./components";
// import { Context } from "./context/context";
import { About, Home } from "./screens";

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
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
