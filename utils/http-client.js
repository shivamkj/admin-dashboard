import axios from "axios";

const httpClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api`,
  withCredentials: true,
});

export { httpClient };
