import axios from 'axios';


const api = axios.create({
<<<<<<< HEAD
  baseURL: 'https://api-isac-transparencia.herokuapp.com'
  // baseURL: 'https://staging-api-portal.herokuapp.com'
  ,
=======
  //baseURL: 'https://api-isac-transparencia.herokuapp.com',
  //baseURL: 'https://staging-api-portal.herokuapp.com',
  baseURL: 'https://portal-isac-core.herokuapp.com',
  headers: {
    "content-type": "application/json;charset=utf-8",
  },
>>>>>>> feature/dashboard
});

export default api;