import axios from "axios";

const service = axios.create({
  //baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: "http://localhost:5000",
  timeout: 60000,
});

export default service;
