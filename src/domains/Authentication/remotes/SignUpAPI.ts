import { instance } from "packages/modules/axios";

import { convertToFormData } from "utils";
import {
  CheckAccountParams,
  CheckAccountPayload,
  SendCodeParams,
  SendCodePayload,
  CheckCodeParams,
  CheckCodePayload,
  SignUpParams,
  SignUpPayload
} from "../models/api";

const url = {
  checkAccount: "/checkaccount",
  sendCode: "/sendmail",
  checkCode: "/checkmail",
  signUp: "/register"
};

export const checkAccount = async (params: CheckAccountParams) => {
  try {
    const { data } = await instance.get<CheckAccountPayload>(url.checkAccount, {
      params
    });

    return data;
  } catch (e) {
    return {
      result: false
    };
  }
};

export const sendCode = async (params: SendCodeParams) => {
  try {
    const { data } = await instance.get<SendCodePayload>(url.sendCode, {
      params
    });

    return data;
  } catch (e) {
    return {
      result: false
    };
  }
};

export const checkCode = async (params: CheckCodeParams) => {
  try {
    const { data } = await instance.get<CheckCodePayload>(url.checkCode, {
      params
    });

    return data;
  } catch (e) {
    return {
      result: false
    };
  }
};

export const signUp = async (params: SignUpParams) => {
  const formData = convertToFormData(params);

  const { data } = await instance.post<SignUpPayload>(url.signUp, formData);

  return data;
};
