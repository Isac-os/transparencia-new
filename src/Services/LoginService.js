import api from './api';

class LoginService {
  get(data) {
    return api.get("login", data)
  }
}

export default new LoginService();