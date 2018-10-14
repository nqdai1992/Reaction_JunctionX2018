import config from "./config";
import Axios from "axios";

const axios = Axios.create({
  baseURL: config.domain
});

function generateBasicAPI(path) {
  return {
    create: data => {
      data.createdAt = Date.now();
      return axios.post(path, data);
    },
    update: (id, data) => {
      data.updatedAt = Date.now();
      return axios.put(`${path}/${id}`, data);
    },
    delete: id => {
      return axios.delete(`${path}/${id}`);
    },
    get: (param, query) => {
      if (query) {
        if (param) return axios.get(`${path}/${param}?${query}`);
        return axios.get(`${path}?${query}`);
      }
      if (param) return axios.get(`${path}/${param}`);
      return axios.get(`${path}`);
    }
  };
}

export default {
  users: generateBasicAPI("users"),
  groups: generateBasicAPI("groups")
};
