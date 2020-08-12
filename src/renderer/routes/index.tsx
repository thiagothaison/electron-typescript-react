import React from 'react';
import { Switch } from 'react-router-dom';

import Main from 'renderer/screens/Main';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
    </Switch>
  );
};

export default Routes;
