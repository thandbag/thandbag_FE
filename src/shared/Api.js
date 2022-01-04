import axios from "axios";

const Api = axios.create({
  baseURL: "http://3.38.7.220",
});

export default Api;