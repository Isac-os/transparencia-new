import api from './api'
import { unMask } from "remask";


class UsuarioService {

  getAll() {
    return api.get("usuarios");
  }

  get(id) {
    return api.get(`usuario/${id}`);
  }

  create(data) {
    data = { ...data, cpf: unMask(data.cpf) }
    return api.post("usuario", data);
  }

  delete(id) {
    return api.delete(`usuario/${id}`)
  }

  update(id, data) {
    return api.put(`usuario/${id}`, data);
  }

  activeUser(id) {
    return api.put(`alteraSituacao/${id}/2`);
  }

  disableUser(id) {
    return api.put(`alteraSituacao/${id}/3`);
  }

}

export default new UsuarioService();