import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import ScannerPage from './ui/pages/scanner_page';
import HomePage from './ui/pages/home_page';
import ResultPage from './ui/pages/result_page';
import SignIn from './ui/pages/auth/sign_in';
import Panel from './ui/pages/admin/panel';
import PrivateRoute from './ui/components/private_route';


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
                <SignIn />
            </Route>
            <PrivateRoute path="/administration"   component={Panel} />
            <Route path="/result/:kode" children={<ResultPage />} />
        </Switch>
    </Router>
);

export default App;
