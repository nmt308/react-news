import axios from 'axios';
const request = axios.create({
    baseURL: 'https://eventregistry.org/api/v1',
});
export default request;
