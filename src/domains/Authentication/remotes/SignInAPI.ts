import { instance } from "../../../packages/modules/axios";

interface Params {
  email: string;
  password: string;
}

interface Payload {
  access_token: string;
}

const url = "/login";

export const signIn = async (params: Params) => {
  const { data } = await instance.post<Payload>(url, params);

  return data;
};
