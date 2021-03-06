import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Deputados from '../pages/Deputados';
import DeputadoInfo from '../pages/DeputadoInfo';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Deputados} />
    <Route path="/:id/info" component={DeputadoInfo} />
  </Switch>
);

export default Routes;
