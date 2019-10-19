import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Detalhe from '../pages/Detalhe';
import Landing from '../pages/Landing';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/product" component={Detalhe} />
    </Switch>
  );
}
