import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from '../container/register/register';
import Login from '../container/login/login';
import NavBar from "../component/navbar/navbar";
import Dashboard from '../container/userDashboard/dashboard';
import CreateLoanDashboard from '../container/userCreateLoan/create_loan_dashboard';

import CkeditorTest from '../container/Ckeditor'

class Router extends React.Component {
    render() {
        let user = localStorage.getItem("user");
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    <Route exact path="/user/dashboard">
                        {!user ? <Redirect to="/login" /> : <Dashboard />}
                    </Route>
                    <Route exact path="/user/createloan">
                        {!user ? <Redirect to="/login" /> : <CreateLoanDashboard />}
                    </Route>
                    <Route exact path="/login">
                        {user ? <Redirect to="/user/dashboard" /> : <Login />}
                    </Route>
                    <Route exact path="/register">
                        {user ? <Redirect to="/user/dashboard" /> : <Register />}
                    </Route>
                    <Route exact path="/ckeditor">
                        <CkeditorTest />
                    </Route>
                    <Route path="*">Page Not Found</Route>
                </Switch>
            </div>
        )
    }
}

export default Router;