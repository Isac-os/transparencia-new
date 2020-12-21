import api from './api'
import { unMask } from "remask";


class UnidadeService {
  getAll() {
    return api.get("unidades");
  }

  get(id) {
    return api.get(`unidade/${id}`);
  }

  create(data) {
    data = { ...data, cnpj: unMask(data.cnpj), cep: unMask(data.cep), telefone: unMask(data.telefone) };
    return api.post("unidade", data);
  }

  update(id, data) {
    return api.put(`unidade/${id}`, data);
  }

  delete(id) {
    return api.delete(`unidade/${id}`);
  }
}

export default new UnidadeService();