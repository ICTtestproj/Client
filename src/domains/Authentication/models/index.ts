import { ExecFileSyncOptionsWithBufferEncoding } from "node:child_process";

export interface SignInParams {
    account: string;
    password: string;
  }
  
export interface SignInPayload {
    access_token: string;
}
  
export interface PersonalInputs {
  name: string;
  setName: (name: string) => void;
  employNum: string;
  setEmployNum: (employNum: string) => void;
}

export interface AuthenticationInputs {
  email: string;
  setEmail: (email: string) => void;
  code: string;
  setCode: (code: string) => void;
}

export interface PasswordInputs {
  password: string;
  setPassword: (password: string) => void;
  rePassword: string;
  setRePassword: (rePassword: string) => void;
}
