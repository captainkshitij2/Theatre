import React from 'react';
import Home from './Component/Home';
import Book from './Component/Book';
import Payment from './Component/Payment'
import Admin from './Component/Admin';
import {BrowserRouter ,Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/book" component={Book}/>
      <Route exact path="/payment" component={Payment}/>
      <Route exact path="/admin" component={Admin}/>
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;