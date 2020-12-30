import api from './api';
import { unMask } from 'remask';

class LoginService {
  login(data) {
    data = { ...data, cpf: unMask(data.cpf) };
    return api.get("login", data)
  }
}

export default new LoginService();