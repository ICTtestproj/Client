import { instance } from "../../../packages/modules/axios";

import {convertToFormData} from '../../../utils';
import {SignInParams, SignInPayload} from '../models';

const url = "/login";

export const signIn = async (params: SignInParams) => {

  const formData = convertToFormData(params);
  
  const { data } = await instance.post<SignInPayload>(url, formData);

  return data;
};
