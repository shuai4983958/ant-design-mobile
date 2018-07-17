
import React, { Component } from 'react';
import {
    Route, Switch 
} from 'react-router-dom'
import routers from '../src/router/index'

export default class App extends Component {
 
    render() {
        return (
          <Switch>
            {
                routers.map((r, key) => (
                    <Route component={r.component}
                          exact={!!r.exact}
                          key={key}
                          path={r.path}
                    />
                ))
            }
          </Switch>
        )
    }
}
