import axios from './axios';

const setTokenAuthInAxiosClient = token => {
    if (token)  axios.defaults.headers.common['x-auth-token'] = token;
    else delete axios.defaults.headers.common['x-auth-token'];
}

export default setTokenAuthInAxiosClient;