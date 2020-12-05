import api from '../../api';

export const getCandidates = async (params = {}) => {
  return await api({
    method: 'GET',
    url: Object.keys(params).length ? 'search/candidates' : 'candidates',
    params,
  });
};
export const getCandidate = async ({ id }) => {
  return await api.get(`/candidates/${id}`);
};

export const storeCandidate = async ({ data }) => {
  return await api.post(`/candidates`, data);
};

export const updateCandidate = async ({ id, data }) => {
  return await api.put(`/candidates/${id}`, data);
};

export const deleteCandidate = async ({ id }) => {
  return await api.delete(`/candidates/${id}`);
};
