import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './Main.css'

const Main = () => {
    return (
        <div>
        <div className="header">
          <Header></Header>
          <Home></Home>
   
       </div>
        </div>
    );
};

export default Main;