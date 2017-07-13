import { combineReducers } from 'redux';

import usersReducer from './users-reducer';

var reducers = combineReducers({
    usersState: usersReducer
});

export default reducers;