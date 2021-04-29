import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from '../container/register/register';
import Login from '../container/login/login';
import NavBar from "../component/navbar/navbar";
import Dashboard from '../container/userDashboard/dashboard';
import CreateLoanDashboard from '../container/userCreateLoan/createLoanDashboard';

class Router extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/user/dashboard" component={Dashboard} />
                    <Route exact path="/user/createloan" component={CreateLoanDashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route path="*" component={Login} />
                </Switch>
            </div>
        )
    }
}

export default Router;