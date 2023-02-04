import axios from 'axios';
const request = axios.create({
    baseURL: 'http://eventregistry.org/api/v1',
});
export default request;
