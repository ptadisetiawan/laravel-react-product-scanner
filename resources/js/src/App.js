import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ScannerPage from './ui/pages/scanner_page';
import HomePage from './ui/pages/home_page';
import ResultPage from './ui/pages/result_page';

const App = () => (
  <Router>
  {/* <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/scanner">Scanner</Link>
      </li>
    </ul>

    <hr /> */}

    {/*
      A <Switch> looks through all its children <Route>
      elements and renders the first one whose path
      matches the current URL. Use a <Switch> any time
      you have multiple routes, but you want only one
      of them to render at a time
    */}
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/scanner">
        <ScannerPage />
      </Route>
      <Route path="/result/:kode" children={<ResultPage />} />
    </Switch>
  {/* </div> */}
</Router>
);

export default App;
