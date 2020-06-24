import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Choice from '../pages/Choice/'
import Size from '../pages/Size'
import Dough from '../pages/Dough'
import Border from '../pages/Border'
import Filling from '../pages/Filling'
import Checkout from '../pages/Checkout'
import Success from '../pages/Success'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/choice" component={Choice} />
        <Route path="/sizes" component={Size} />
        <Route path="/doughes" component={Dough} />
        <Route path="/borders" component={Border} />
        <Route path="/fillings" component={Filling} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/success" component={Success} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
