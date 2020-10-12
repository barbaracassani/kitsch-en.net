import axios, { AxiosResponse } from "axios";

const ROOT = "http://kitsch-en.net/wp-json/wp/v2";

const endpoints = {
  posts: "/posts?_fields=id,excerpt,title,link,img,date,slug",
  post: (...args: string[]) => {
    return `/posts?slug=${args[0]}`;
  },
};

export const get = (
  what: keyof typeof endpoints,
  ...args: string[]
): Promise<AxiosResponse<any>> => {
  const item = endpoints[what];
  const endp = typeof item === "string" ? item : item(...args);
  return axios.get(`${ROOT}${endp}`);
};
