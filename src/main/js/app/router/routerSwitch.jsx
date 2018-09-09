import React from 'react';
import {Switch, Route} from 'react-router';
import * as routes from 'app/constants/routes';
import HomeLayout from 'app/components/pages/home';
import StateLayout from 'app/components/pages/state';
import RestLayout from 'app/components/pages/rest';
import WebSocketLayout from 'app/components/pages/webSocket';

export default () => (
    <Switch>
        <Route exact path={routes.index()} component={HomeLayout}/>
        <Route exact path={routes.state()} component={StateLayout}/>
        <Route exact path={routes.rest()} component={RestLayout}/>
        <Route exact path={routes.websocket()} component={WebSocketLayout}/>
    </Switch>
);