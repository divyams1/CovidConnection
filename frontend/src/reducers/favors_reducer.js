import { RECEIVE_FAVOR, RECEIVE_FAVORS, UPDATE_FAVOR } from '../actions/favor_actions';

const FavorsReducer = ( state = {} , action) => {
    Object.freeze(state);
    let newState = Object.assign( {}, state);
    switch( action.type ) {
        case RECEIVE_FAVORS:
            return Object.assign(  { }, newState, action.favors )
        case RECEIVE_FAVOR:
            debugger
            return Object.assign( {}, newState, { [action.favor._id]: action.favor })
        case UPDATE_FAVOR:
            // debugger
            /// newState.data[action.favor._id] = action.favor;
            // debugger
            // return Object.assign({}, newState) //<-- here
            return Object.assign({}, newState, { [action.favor._id]: action.favor })
            
        default:
            return state; 
    }
}

export default FavorsReducer;