import axios from 'axios';
const request = axios.create({
    baseURL: 'https://newsapi.org/v2',
});
export default request;
