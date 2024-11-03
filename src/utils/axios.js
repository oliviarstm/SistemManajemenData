import axios from 'axios';

// Membantu memperpendek pemanggilan API
const instance = axios.create({
    baseURL: import.meta.env.VITE_APIURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;