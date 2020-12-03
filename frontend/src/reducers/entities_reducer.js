import { ReactReduxContext } from "react-redux";
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import favorsReducer from './favors_reducer';


const entitiesReducer = combineReducers({
    users: usersReducer,
    favors: favorsReducer

})





export default entitiesReducer;