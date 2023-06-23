import axios from "axios";

class ApiAdapter {
  constructor() {
    this.http = axios.create({
      baseURL: "https://crudcrud.com/api/736ca117f3d1469283f90b3e87724534",
    });
  }

  async post(url, data) {
    return await this.http.post(url, data);
  }

  async get(url) {
    return await this.http.get(url);
  }

  async delete(url) {
    return await this.http.delete(url);
  }
}

const apiAdapter = new ApiAdapter();

export default apiAdapter;
