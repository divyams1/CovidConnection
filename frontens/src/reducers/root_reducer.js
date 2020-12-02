import { ReactReduxContext } from "react-redux";
import {combineReducers} from 'redux';
import entitiesReducer from "./entities_reducer";
import sessionReducer from './session_api_reducer';
import errorsReducer from './errors_reducer';

import uiReducer from "./ui_reducer";


const RootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
        ui: uiReducer,
    errors: errorsReducer



})





export default RootReducer;