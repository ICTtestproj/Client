import { instance } from "../../../packages/modules/axios";

import { authorization } from "../../../utils/authorization";
import {
  GetMyScrapParams,
  GetMyScrapPayload,
  GetLastAskParams,
  GetLastAskPayload,
  GetOftenAskedParams,
  GetOftenAskedPaylaod
} from "../models/api";

const url = {
  getMyScrap: "/myscrap",
  getLastAsk: "/lastask",
  getOftenAsked: "oftenasked"
};

export const getMyScrap = async (params: GetMyScrapParams) => {
  try {
    const { data } = await instance.get<GetMyScrapPayload>(url.getMyScrap, {
      headers: authorization(params.accessToken)
    });

    return data;
  } catch (e) {
    return {
      result: []
    };
  }
};

export const getLastAsk = async (params: GetLastAskParams) => {
  try {
    const { data } = await instance.get<GetLastAskPayload>(url.getLastAsk, {
      headers: authorization(params.accessToken)
    });

    return data;
  } catch (e) {
    return {
      result: []
    };
  }
};

export const getOftenAsked = async (params: GetOftenAskedParams) => {
  try {
    const { data } = await instance.get<GetOftenAskedPaylaod>(
      url.getOftenAsked,
      {
        headers: authorization(params.accessToken)
      }
    );

    return data;
  } catch (e) {
    return {
      result: []
    };
  }
};
