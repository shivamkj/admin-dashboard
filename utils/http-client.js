import axios from "axios";

const httpClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api`,
  withCredentials: true,
});

httpClient.interceptors.response.use(undefined, (error) => {
  // navigate to login page if any API response status is 401 (unauthorised)
  if (error.response.status == 401) {
    window.location.replace(process.env.NEXT_PUBLIC_LOGIN_URL);
  }
  return Promise.reject(error);
});

export { httpClient };
