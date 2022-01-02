import axios from "axios";

const Api = axios.create({
  baseURL: "http://52.78.54.60",
});

export const setAccessToken = () => {
  const accessToken = sessionStorage.getItem("token");
  Api.defaults.headers.Authorization = accessToken;
};

export default Api;