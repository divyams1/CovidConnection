import { RECEIVE_FAVOR, RECEIVE_FAVORS, RECIEVE_FAVORS } from '../actions/favor_actions';

const FavorsReducer = ( state = {} , action) => {
    Object.freeze(state);
    let newState = Object.assign( {}, state);
    switch( action.type ) {
        case RECEIVE_FAVORS:
            return Object.assign(  { }, newState, action.favors )
        case RECEIVE_FAVOR:
            return Object.assign( {}, newState, { [action.favor.id]: action.favor }) 
        default:
            return state; 
    }
}

export default FavorsReducer;