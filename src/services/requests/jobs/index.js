import api from '../../api';

export const getJobs = async (params = {}) => {
  return await api({
    method: 'GET',
    url: Object.keys(params).length ? 'search/jobs' : 'jobs',
    params,
  });
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
