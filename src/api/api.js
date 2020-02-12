import axios from 'axios';

export const requestLogin = form => { return axios.post('/api/v1/user/login', form).then(res => res.data); };

export const getOwner = form => { return axios.get('/api/v1/user/owner', form).then(res => res.data); };