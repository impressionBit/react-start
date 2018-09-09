import * as actionType from "../constants/actionType";

const initialState = {locale: 'en'};

// reducer locale
export default (state = initialState, action = {}) => {
    if (action.type === actionType.SET_LOCALE) {
        const newState = Object.assign({}, state);
        newState.locale = action.locale;
        return newState;
    }
    return state;
};