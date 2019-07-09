import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import NavBar from '../navbar/NavBar';
import DashboardContainer from '../dashboard/DashboardContainer';
import Header from '../header/Header';

const App = () => (
  <BrowserRouter>
    <main>
      <Header />
      {/* <NavBar /> */}
      <Switch>
        <Route exact path='/' component={DashboardContainer} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
