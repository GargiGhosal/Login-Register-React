import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Banner from './Banner/Banner';
import AmriDeptList from './DeptList/AmriDeptList';

export default class BokkingPage extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path ="/Banner" component={Banner} />
                    <Route path="/AmriDeptList" component={AmriDeptList} />
                </Switch>
            </Router>
        )
    }
}
