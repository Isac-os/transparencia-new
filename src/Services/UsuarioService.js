import api from './api'
import { unMask } from "remask";


class UsuarioService {
  getAll() {
    return api.get("usuarios");
  }

  create(data) {
    return api.post("usuario", data);
  }

}

export default new UsuarioService();