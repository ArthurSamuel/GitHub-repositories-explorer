/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

interface IRequest {
  url: string;
  params?: any;
}

export const apiInstance = axios.create({
  timeout: 30000,
  baseURL: "https://api.github.com",
});

apiInstance.interceptors.request.use(async (config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

apiInstance.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err: any) => {
    return Promise.reject(err);
  }
);

const get = <T = any>({ url, params }: IRequest) => {
  const query = params
    ? new URLSearchParams(params as Record<string, string>).toString()
    : "";
  const urlTarget = query ? `${url}?${query}` : url;
  return apiInstance.get<T>(urlTarget);
};

const Http = {
  get,
};

export default Http;
