import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Home from './page/home';
import Blur from './page/blur';

const Main = () => (
    <main>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blur' component={Blur}/>
      </Switch>
    </main>
  )
  
  export default Main;
