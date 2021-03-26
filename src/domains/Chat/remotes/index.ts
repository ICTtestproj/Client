import { instance } from "packages/modules/axios";

import {convertToFormData} from 'utils';

import {GetChattingParams, GetChattingPayload, RegisterScrapParams, RegisterScrapPayload} from '../models/api';

const url = {getChat: "/chat", registerScrap: '/regscrap'};

export const getChat = async (params: GetChattingParams) => {
  try {

    const { data } = await instance.get<GetChattingPayload>(url.getChat, {params});

    return data;
  } catch (e) {
    return {
      result: false
    };
  }
};

export const registerScrap = async (params: RegisterScrapParams) => {
  try {
    const formData = convertToFormData(params);

    const { data } = await instance.post<RegisterScrapPayload>(url.registerScrap, formData);

    return data;
  } catch (e) {
    return {
      result: false
    };
  }
};
