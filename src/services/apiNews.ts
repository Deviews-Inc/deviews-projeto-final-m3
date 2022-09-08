import axios from "axios";

const apiNews = axios.create({
  baseURL: "https://newsdata.io/api",
  timeout: 5000,
});

export default apiNews;
