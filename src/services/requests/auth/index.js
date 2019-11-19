import api from "../../api";

export const Login = async ({ data }) => {
  return await api.post("/auth/login", data);
};

export const Logout = async ({ data }) => {
  return await api.post("/auth/logout", data);
};

export const Forgot = async ({ data }) => {
  return await api.post("/auth/forgot", data);
};
