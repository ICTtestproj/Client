export interface SignInParams {
  account: string;
  password: string;
}

export interface SignInPayload {
  access_token?: string;
  result: boolean;
}

export interface CheckAccountParams {
  account: string;
}

export interface CheckAccountPayload {
  result: boolean;
}

export interface SendCodeParams {
  email: string;
}

export interface SendCodePayload {
  result: boolean;
}

export interface CheckCodeParams {
  email: string;
  code: string;
}

export interface CheckCodePayload {
  result: boolean;
}

export interface SignUpParams {
  personalcode: string;
  email: string;
  name: string;
  password: string;
}

export interface SignUpPayload {
  result: boolean;
}
