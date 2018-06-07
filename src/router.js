import React from 'react';
import { Router ,Switch, Route} from 'dva/router';
import App from './routes/App/index';
import Home from './routes/App/home';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route path="/"  exact component={Home} />
        </Switch>
      </App>
    </Router>
  );
  // const routes = [
  //   {
  //     path:'',
  //     component:App,
  //   }
  // ]
  // console.log(routes)
  // return (<Router history={history} routes={routes} />)
}

export default RouterConfig;
