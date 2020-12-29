import api from './api'
import { unMask } from "remask";


class UsuarioService {
  getAll() {
    return api.get("usuarios");
  }

}

export default new UsuarioService();