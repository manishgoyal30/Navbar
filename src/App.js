//tutorial 57

import React from "react";
import { Route, Switch} from "react-router";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Menu from "./Menu";
import Services from "./Services";
import User from "./User";

const App = () => {

  const Name = () => {
    return <h1>Hello, I am Name Page</h1> 
  };

  return (
    <>
    <Menu/>
    <Switch>
      <Route exact path='/' component={() => <About name="About"/>}/>
      <Route exact path='/contact' component={Contact} />
      <Route 
      exact path="/services"
      render={() => <Services name="Services"/>} />
      <Route path='/contact/Name' component={Name} />
      <Route path="/user/:fname/:lname" component={User}/>
      <Route component={Error} />

    </Switch>     
    </>
  )
};

export default App;


