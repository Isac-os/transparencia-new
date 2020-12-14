import axios from 'axios';


const api = axios.create({
  // baseURL: 'https://api-isac-transparencia.herokuapp.com',
  baseURL: 'https://staging-api-portal.herokuapp.com',
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
});

export default api;