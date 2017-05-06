import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import SomePage from './containers/SomePage';
import NotFound from './containers/NotFound';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/somepage' component={SomePage} />
                <Route path='*' component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
