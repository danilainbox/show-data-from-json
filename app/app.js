import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HelloLayout from './components/layouts/hello-layout';
import UsersListContainer from './components/containers/users-list-container';
import '../public/less/style.less';


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={HelloLayout} />
            <Route path="/show-data" component={UsersListContainer} />
        </Switch>
    </Router>,
    document.getElementById('app')
);
