import axios from "axios";
import { parseCookies } from "nookies";
import Router from "next/router";

export function getAPIClient(ctx?: any) {
  const { "andra-sistemas.token": token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL_API}`,
  });

  api.interceptors.request.use((config) => {
    config.headers["Content-type"] = `application/json`;

    return config;
  });

  if (token) {
    api.defaults.headers["x-token"] = `${token}`;
  }

  api.interceptors.response.use(
    async (response) => {
      return response;
    },
    async (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        api.defaults.headers["x-token"] = '';
        if (ctx) {
          ctx.res.writeHead(302, {
            Location: "/",
          });
          ctx.res.end();
        } else if (Router) {
          Router.push("/");
        }

        const requestConfig = error.config;
        return axios(requestConfig);
      }
      return Promise.reject(error);
    }
  );

  return api;
}
