import axios from "axios";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: "mysupersecret1234567120",
    "Content-type": "application/json",
  },
  // timeout: 100,
});

const setHeader = async (accessToken) => {
  client.defaults.headers.common["Access-Token"] = accessToken;
};

const removeHeader = async () => {
  delete client.defaults.headers.common["Access-Token"];
};

export { httpClient, setHeader, removeHeader };
