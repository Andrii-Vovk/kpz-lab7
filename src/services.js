import axios from "axios";
import { toast } from "react-toastify";

export const API_URL = "https://localhost:44385/";

export const deleteClient = (id) => {
  return axios
    .delete(`${API_URL}api/clients/${id}`)
    .then(() => toast.success("Operation Successful"))
    .catch((err) => toast.error(err.message));
};

export const updateClient = (id, data) => {
  return axios
    .put(`${API_URL}api/clients/${id}`, data)
    .then(() => toast.success("Operation Successful"))
    .catch((err) => toast.error(err.message));
};

export const createClient = (data) => {
  return axios
    .post(`${API_URL}api/clients`, data)
    .then(() => toast.success("Operation Successful"))
    .catch((err) => toast.error(err.message));
};
export const deletePolicy = (id) => {
  return axios
    .delete(`${API_URL}api/policies/${id}`)
    .then(() => toast.success("Operation Successful"))
    .catch((err) => toast.error(err.message));
};

export const updatePolicy = (id, data) => {
  return axios
    .put(`${API_URL}api/policies/${id}`, data)
    .then(() => toast.success("Operation Successful"))
    .catch((err) => toast.error(err.message));
};

export const createPolicy = (data) => {
  return axios
    .post(`${API_URL}api/policies`, data)
    .then(() => toast.success("Operation Successful"))
    .catch((err) => toast.error(err.message));
};
