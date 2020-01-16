import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Home from './page/home';
import Blur from './page/blur';
import Pixelated from './page/pixelated';

const Main = () => (
    <main>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blur' component={Blur}/>
        <Route path='/pixelated' component={Pixelated}/>
      </Switch>
    </main>
  )
  
  export default Main;
