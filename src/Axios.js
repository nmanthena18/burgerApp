import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://createburger-in.firebaseio.com/'
});

export default instance;