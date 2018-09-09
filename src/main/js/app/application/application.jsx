import React from 'react';
import {createBrowserHistory} from 'history';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {withRouter} from 'react-router-dom';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import LocaleProvider from 'app/application/localeProvider'
import IndexLayout from 'app/components/layout';
import {reducers} from 'app/reduser/redusers';

export default function Application() {
    const WrappedPage = withRouter(IndexLayout);
    const history = createBrowserHistory();

    return (
        <Provider store={createStore(reducers, composeWithDevTools(applyMiddleware(routerMiddleware(history))))}>
            <LocaleProvider>
                <ConnectedRouter history={history}>
                     <WrappedPage/>
                </ConnectedRouter>
            </LocaleProvider>
        </Provider>
    )
};