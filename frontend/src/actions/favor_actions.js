import * as APIUtil from '../utils/favors_api_util';

export const RECEIVE_FAVORS = "RECEIVE_FAVORS"
export const RECEIVE_FAVOR = "RECEIVE_FAVOR"
export const UPDATE_FAVOR = "UPDATE_FAVOR"

export const receiveFavors = favors => {
    return {
        type: RECEIVE_FAVORS, 
        favors
    }
}

export const receiveFavor = favor => {
    return {
        type: RECEIVE_FAVOR,
        favor 
    }
}

export const changeFavor = favor => {
    return {
        type: UPDATE_FAVOR,
        favor
    }
}

export const fetchFavors = () => dispatch => {
    return APIUtil.getFavors()
        .then( favors => dispatch(receiveFavors(favors)))
        .catch( err => console.log(err))
}
export const createFavor = data => dispatch => {
    return APIUtil.createFavor(data)
        .then( favor => {
            dispatch(receiveFavor(favor.data))})
        .catch( err => console.log(err))
}

export const updateFavor = data => dispatch => {
    debugger
    return APIUtil.updateFavor(data)
        .then(favor => {
            debugger
            dispatch(changeFavor(favor.data))
        })
        .catch(err => console.log(err))
}

// new
export const fetchFavorsForUser = (data) => dispatch => {
    return APIUtil.getFavorsForUser(data)
        .then(favors => dispatch(receiveFavors(favors)))
        .catch(err => console.log(err))
}


// getFavorsForUser