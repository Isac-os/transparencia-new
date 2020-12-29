import api from './api';

class LoginService {
  create(data) {
    return api.post("login", data)
  }
}

export default new LoginService();