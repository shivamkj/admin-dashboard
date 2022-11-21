import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: "mysupersecret1234567120",
  },
  withCredentials: true,
  // timeout: 100,
});

export { httpClient };
