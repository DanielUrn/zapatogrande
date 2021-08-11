import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import productsList from './components/productos/plist'
import Navbar from './components/navbar/Navbar'

import 'bootswatch/dist/pulse/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Navbar></Navbar>

      <Switch>
        <Route exact path="/" component={productsList} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
