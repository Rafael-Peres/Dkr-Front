import api from "../../api";

export const getJobs = async () => {
  return await api.get(`/jobs`);
};

export const getJob = async ({ id }) => {
  return await api.get(`/jobs/${id}`);
};

export const storeJob = async ({ data }) => {
  return await api.post(`/jobs`, data);
};

export const updateJob = async ({ id, data }) => {
  return await api.put(`/jobs/${id}`, data);
};

export const deleteJob = async ({ id }) => {
  return await api.delete(`/jobs/${id}`);
};
