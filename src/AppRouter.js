import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './RouterIndex'
import List from './RouterList'
import PureCommon from './PureAndCommon'

function AppRouter() {
    return (
        <Router>
            <ul>
                <li> <Link to="/">首页</Link> </li>
                <li><Link to="/list/">列表</Link> </li>
            </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/:id" component={List} />
                <Route path="/list/:id" component={List} />
                <Route path="/pure" component={PureCommon} />

        </Router>
    );
}

export default AppRouter;