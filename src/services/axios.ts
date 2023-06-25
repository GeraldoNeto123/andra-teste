import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(ctx?: any) {
  const { "andra-sistemas.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  });

  api.interceptors.request.use((config) => {
    console.log(config);

    return config;
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
