import { combineReducers } from 'redux';
import list from './list-reducers';

const xwingApp = combineReducers({
    list
});

export default xwingApp;