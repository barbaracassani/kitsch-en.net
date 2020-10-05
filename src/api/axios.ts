import axios, { AxiosResponse } from "axios";

const ROOT = "http://kitsch-en.net/wp-json/wp/v2";

const endpoints = {
  posts: "/posts?_fields=id,excerpt,title,link,img,date",
};
export const get = (
  what: keyof typeof endpoints
): Promise<AxiosResponse<any>> => {
  return axios.get(`${ROOT}${endpoints[what]}`);
};
