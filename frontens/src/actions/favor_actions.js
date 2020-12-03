import {getFavors, createFavor} from '../util/favor_api_util'

export const RECEIVE_FAVORS = "RECEIVE_FAVORS"
export const RECEIVE_FAVOR = "RECEIVE_FAVOR"

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

export const fetchFavors = () => dispatch => {
    return getFavors()
        .then( favors => dispatch(receiveFavors(favors)))
        .catch( err => console.log(err))
}

export const createFavor = data => dispatch => {
    return createFavor(data)
        .then( favor => dispatch(receiveFavor(favor)))
        .catch( err => console.log(err))
}
