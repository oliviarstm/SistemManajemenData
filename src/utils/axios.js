import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APIURL, // replace with your API base URL
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;