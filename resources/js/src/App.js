import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ScannerPage from './ui/pages/scanner_page';
import HomePage from './ui/pages/home_page';
import ResultPage from './ui/pages/result_page';
import LoginPage from './ui/pages/auth/login_page';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/pindai">
                <ScannerPage />
            </Route>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/result/:kode" children={<ResultPage />} />
        </Switch>
    </Router>
);

export default App;
