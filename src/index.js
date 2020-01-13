import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import App from './components/app';

const rootEl = document.getElementById('app');

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), rootEl);

if (module.hot) {
    module.hot.accept();
}
