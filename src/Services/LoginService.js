import api from './api';

class LoginService {
  get() {
    return api.get("login")
  }
}

export default new LoginService();