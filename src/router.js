import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import App from './routes/App/index';
function RouterConfig({ history }) {
  // return (
  //   <Router history={history}>
  //     <Switch>
  //       <Route path="/" exact component={App} />
  //     </Switch>
  //   </Router>
  // );
  const routes = [
    {
      path:'/',
      component:App
    }
  ]
  console.log(routes)
  return <Router history={history} routes={routes} />
}

export default RouterConfig;
