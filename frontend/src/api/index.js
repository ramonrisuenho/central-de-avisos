import axios from "axios";

const api = axios.create({
    baseURL: "http://frontend-central:3000/api",
})

export const addAviso = (payload) => api.post(`/api/v1/controle-avisos`, payload);
export const getAvisos = () => api.get(`/api/v1/controle-avisos`);
export const updateAviso = (id, payload) => api.put(`/api/v1/controle-avisos/${id}`, payload);
export const deleteAviso = (id) => api.delete(`/api/v1/controle-avisos/$${id}`);

const apis = {
    addAviso,
    getAvisos,
    updateAviso,
    deleteAviso
}

export default apis;
