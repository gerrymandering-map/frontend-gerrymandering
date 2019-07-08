import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import NavBar from '../navbar/NavBar';
import DashboardContainer from '../dashboard/DashboardContainer';

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        {/* <NavBar /> */}
        <Route exact path='/' component={DashboardContainer} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
