import * as actionType from "app/constants/actionType";

// action
export const setValue = (value = '') => ({type: actionType.SET_VALUE, value});
export const setLocale = (locale = '') => ({type: actionType.SET_LOCALE, locale});