import api from "../../api";

export const getRecruiters = async () => {
  return await api.get(`/recruiters`);
};

export const getRecruiter = async ({ id }) => {
  return await api.get(`/recruiters/${id}`);
};

export const storeRecruiter = async ({ data }) => {
  return await api.post(`/recruiters`, data);
};

export const updateRecruiter = async ({ id, data }) => {
  return await api.put(`/recruiters/${id}`, data);
};

export const deleteRecruiter = async ({ id }) => {
  return await api.delete(`/recruiters/${id}`);
};
