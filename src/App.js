import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './component/Main/Main';
import About from './component/About/About';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Project from './component/Project/Project';
import Blog from './component/Blog/Blog';
import Contact from './component/Contact/Contact';




function App() {
  return (
       <Router>
         <Switch>
         <Route exact path="/">
          <Main/>
       </Route>
       <Route exact path="/about">
          <About/>
       </Route>
       <Route exact path="/project">
          <Project/>
       </Route>
       <Route exact path="/blogs">
          <Blog/>
       </Route>
       <Route exact path="/contact">
          <Contact/>
       </Route>
         </Switch>
       </Router>
  );
}

export default App;
