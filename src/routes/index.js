import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'

import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Choice from '../pages/Choice/'
import Size from '../pages/Size'
import Dough from '../pages/Dough'
import Border from '../pages/Border'
import Filling from '../pages/Filling'
import Checkout from '../pages/Checkout'
import Success from '../pages/Success'
import NotFound from '../pages/NotFound/'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/choice" component={Choice} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/choice" component={Choice} />
        <PrivateRoute path="/sizes" component={Size} />
        <PrivateRoute path="/doughes" component={Dough} />
        <PrivateRoute path="/borders" component={Border} />
        <PrivateRoute path="/fillings" component={Filling} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <PrivateRoute path="/success" component={Success} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
