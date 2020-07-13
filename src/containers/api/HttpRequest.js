// Http.js
import axios from 'axios';
// Automatically add CSRF token to every outgoing request
const baseURL = 'http://localhost:3000';
const headers = {
    'X-Requested-With': 'XMLHttpRequest',
};

const Parent = axios.create({
    baseURL,
    headers,
});

export default Parent;