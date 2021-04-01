import { instance } from "packages/modules/axios";

import { authorization } from "utils";
import {
  GetMyNameParams,
  GetMyNamePayload,
  GetMyScrapParams,
  GetMyScrapPayload,
  GetLastAskParams,
  GetLastAskPayload,
  GetOftenAskedParams,
  GetOftenAskedPayload,
  DeleteScrapParams,
  DeleteScrapPayload
} from "../models/api";

const url = {
  getMyname: '/getname',
  getMyScrap: "/myscrap",
  getLastAsk: "/lastask",
  getOftenAsked: "/oftenasked",
  deleteScrap: "/delscrap"
};

export const getMyName = async (params: GetMyNameParams) => {
  try {
    const { data } = await instance.get<GetMyNamePayload>(url.getMyname, {
      headers: authorization(params.accessToken)
    });

    return {
      result: data.result.toString()
    };
  } catch (e) {
    return {
      result: ''
    };
  }
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
    console.log('getlastask error')
    
    return {
      result: []
    };
  }
};

export const getOftenAsked = async (params: GetOftenAskedParams) => {
  try {
    const { data } = await instance.get<GetOftenAskedPayload>(
      url.getOftenAsked,
      {
        headers: authorization(params.accessToken)
      }
    );

    return data;
  } catch (e) {

    console.log('oftenasked error')
    return {
      result: []
    };
  }
};

export const deleteScrap = async (params: DeleteScrapParams) => {
  try {
    const { data } = await instance.get<DeleteScrapPayload>(
      url.deleteScrap,
      {
        headers: authorization(params.accessToken),
        params
      }
    );

    return data;
  } catch (e) {

    return {
      result: false
    };
  }
};

