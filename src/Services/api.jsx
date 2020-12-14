import axios from 'axios';


const api = axios.create({
  // baseURL: 'https://api-isac-transparencia.herokuapp.com',
  baseURL: 'https://staging-api-portal.herokuapp.com'
  ,
});

export default api;