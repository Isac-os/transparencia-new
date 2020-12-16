import api from "./api";

class DwellerService {
  getAll() {
    return api.get("units");
  }

  get(id) {
    return api.get(`units/${id}`);
  }

  create(data) {
    return api.post("units", data);
  }

  update(id, data) {
    return api.put(`units/${id}`, data);
  }

  delete(id) {
    return api.delete(`units/${id}`);
  }
}

export default new DwellerService();
