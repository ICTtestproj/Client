import { instance } from "packages/modules/axios";

import { convertToFormData } from "utils";
import { SignInParams, SignInPayload } from "../models/api";

const url = "/login";

export const signIn = async (params: SignInParams) => {
  try {
    const formData = convertToFormData(params);

    const { data } = await instance.post<SignInPayload>(url, formData);

    return data;
  } catch (e) {
    return {
      result: false
    };
  }
};
