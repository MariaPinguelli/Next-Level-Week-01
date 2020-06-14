import axios from "axios";

const api = axios.create({
  baseURL: 'http://192.168.1.8:3333'
  // 192.168.1.3
});

export default api;