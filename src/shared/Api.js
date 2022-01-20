import axios from "axios";

const Api = axios.create({
  baseURL: "https://todays-table.shop",
});

export default Api;
