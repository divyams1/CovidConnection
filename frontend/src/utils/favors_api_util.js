import axios from 'axios';

export const getFavors = () => {
    return axios.get('/api/favors/')
};

// new
export const getFavorsForUser = (data) => {
    return axios.get('/api/favors/users/:user_id', data)
};

export const createFavor = data => {
    return axios.post('/api/favors/', data)
}

