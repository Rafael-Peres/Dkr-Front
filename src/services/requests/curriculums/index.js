import api from '../../api';

export const getCurriculum = async ({ id }) => {
  return await api.get(`/curriculum/${id}`);
};

export const storeCurriculum = async ({ data }) => {
  return await api.post(`/curriculum`, data);
};

export const deleteCurriculum = async ({ id }) => {
  return await api.delete(`/curriculum/${id}`);
};
