export interface PersonalInfoInputsProps {
  name: string;
  setName: (name: string) => void;
  employNum: string;
  setEmployNum: (employNum: string) => void;
}

export interface AuthenticationInputsProps {
  email: string;
  setEmail: (email: string) => void;
  code: string;
  setCode: (code: string) => void;
  setIsCodeChecked: (isCodeChecked: boolean) => void;
}

export interface PasswordInputsProps {
  password: string;
  setPassword: (password: string) => void;
  rePassword: string;
  setRePassword: (rePassword: string) => void;
  isPasswordChecked: boolean;
  setIsPasswordChecked: (isCodeChecked: boolean) => void;
}

export interface SignUpButtonProps {
  isNotEmpty: boolean;
  name: string;
  email: string;
  employNum: string;
  password: string;
  isCodeChecked: boolean;
  isPasswordChecked: boolean;
}
