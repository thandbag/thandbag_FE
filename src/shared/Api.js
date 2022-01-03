import axios from "axios";

const Api = axios.create({
  baseURL: "http://52.78.54.60",
});

export default Api;