import api from './api'
import { unMask } from "remask";


class UnidadeService {
  getAll() {
    return api.get("units");
  }

  get(id) {
    return api.get(`units/${id}`);
  }

  create(data) {
    data = { ...data, cnpj: unMask(data.cnpj), cep: unMask(data.cep) };
    return api.post("units", data);
  }

  update(id, data) {
    return api.put(`units/${id}`, data);
  }

  delete(id) {
    return api.delete(`units/${id}`);
  }
}

export default new UnidadeService();