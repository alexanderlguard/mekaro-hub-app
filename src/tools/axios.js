import axios from 'axios';

const clientAxio = axios.create({
    baseURL: 'http://localhost:4000/api/'
});

export default clientAxio;