import { RECEIVE_FAVOR, RECEIVE_FAVORS, UPDATE_FAVOR, DELETE_FAVOR } from '../actions/favor_actions';

const FavorsReducer = ( state = {} , action) => {
    Object.freeze(state);
    let newState = Object.assign( {}, state);
    switch( action.type ) {
        case RECEIVE_FAVORS:
            return Object.assign(  {}, newState, action.favors )
        case RECEIVE_FAVOR:
            newState.data.shift(action.favor)
            return Object.assign({}, newState)
           ////// return Object.assign( {}, newState, { [action.favor._id]: action.favor })
        case UPDATE_FAVOR:
            
            let r;
                 
            for (let i = 0; i < newState.data.length; i++) {
                if (newState.data[i]._id === action.favor._id) {
                    r = i;
                }
            }
            newState.data = newState.data.filter(favor => favor._id !== action.favor._id);
            newState.data.splice(r, 0, action.favor)



            
            /// newState.data[action.favor._id] = action.favor;
            // return Object.assign({}, newState) //<-- here
            return Object.assign({}, newState, { [action.favor._id]: action.favor })
        case DELETE_FAVOR:
        

            newState.data = newState.data.filter(favor => favor !== action.favor);
            
            
            /// newState.data[action.favor._id] = action.favor;
            // return Object.assign({}, newState) //<-- here
            return Object.assign({}, newState)
            
        default:
            return state; 
    }
}

export default FavorsReducer;