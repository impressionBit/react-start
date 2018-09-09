import {combineReducers} from 'redux';

import {reducer} from 'app/reduser/reduser';
import localeReducer from 'app/reduser/localeReduser';

export const reducers = combineReducers({
    state: reducer,
    intl: localeReducer,
});