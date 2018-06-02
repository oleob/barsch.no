import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Page404 from './pages/Page404';
import Battery from './pages/Battery';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/battery" component={Battery} />
      <Route path="*" component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
