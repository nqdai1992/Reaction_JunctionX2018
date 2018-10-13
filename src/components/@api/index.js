import config from "./config";
import Axios from "axios";

const axios = Axios.create({
  baseURL: config.domain
});

function generateBasicAPI(path) {
  return {
    create: data => {
      return axios.post(path, data);
    },
    update: (id, data) => {
      return axios.patch(`${path}/${id}`, data);
    },
    delete: id => {
      return axios.delete(`${path}/${id}`, { params: { vendorId } });
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

export const user = generateBasicAPI("users");
