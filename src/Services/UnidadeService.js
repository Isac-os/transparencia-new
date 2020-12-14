import api from './api'
import { unMask } from "remask";


class UnidadeService {
  getAll() {
    return api.get("unit_status");
  }

  get(id) {
    return api.get(`unit_status/${id}`);
  }

  create(data) {
    data = { ...data, cnpj: unMask(data.cnpj), cep: unMask(data.cep) };
    return api.post("unit_status", data);
  }

  update(id, data) {
    return api.put(`unit_status/${id}`, data);
  }

  delete(id) {
    return api.delete(`unit_status/${id}`);
  }
}

export default new UnidadeService();