import * as actionType from 'app/constants/actionType';

export const initialState = {value: ' '};

// reducer
export const reducer = (state = initialState, action = {}) => {
    if (action.type === actionType.SET_VALUE) {
        const newState = Object.assign({}, state);
        newState.value = action.value;
        return newState;
    }
    return state;
};
