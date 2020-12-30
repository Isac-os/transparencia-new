import axios from 'axios';


const api = axios.create({
  // baseURL: 'https://api-isac-transparencia.herokuapp.com',
  // baseURL: 'https://staging-api-portal.herokuapp.com',
  baseURL: 'https://portal-isac-core.herokuapp.com',
  headers: { 'Content-Type': 'application/json;charset=UTF-8', "Access-Control-Allow-Origin": "*", "Accept": "application/json" },
});

export default api;