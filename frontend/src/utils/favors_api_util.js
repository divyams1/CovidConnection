import axios from 'axios';

export const getFavors = () => {
    return axios.get('/api/favors/')
};

export const createFavor = data => {
    return axios.post('/api/favors/', data)
}

export const getFavorsForUser = () => {
    return axios.get('/api/favors/users/:user_id')
};