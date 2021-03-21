import * as React from "react";

import { AuthenticationInputsProps } from "../../../../models/props";
import { sendCode, checkCode, signUp } from "../../../../remotes/SignUpAPI";

import { Input } from "../../../../../../packages/DesignSystem";
import { InputsContainer } from "./style";

const AuthenticationInputs: React.FC<AuthenticationInputsProps> = ({
  email,
  setEmail,
  code,
  setCode,
  setIsCodeChecked
}) => {
  enum EmailStatus {
    sendSuccess = "인증번호가 전송되었습니다.",
    sendFailure = "인증번호 전송에 실패하였습니다.",
    invalidForm = "이메일 형식이 올바르지 않습니다.",
    empty = "이메일 주소를 입력하세요."
  }
  enum CodeStatus {
    checkSuccess = "인증에 성공하였습니다.",
    checkFailure = "인증번호가 일치하지 않습니다.",
    empty = "인증번호를 입력하세요."
  }

  const [emailStatus, setEmailStatus] = React.useState<string>("");
  const [codeStatus, setCodeStatus] = React.useState<string>("");

  const handleChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleChangeCode = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCode(e.target.value);
    },
    []
  );

  const handleClickSendBtn = React.useCallback(async () => {
    function validateEmail(email: string) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    if (!email) {
      setEmailStatus(EmailStatus.empty);
    } else if (!validateEmail(email)) {
      setEmailStatus(EmailStatus.invalidForm);
    } else {
      setEmailStatus("");
      const response = await sendCode({ email });

      if (response.result) setEmailStatus(EmailStatus.sendSuccess);
      else setEmailStatus(EmailStatus.sendFailure);
    }
  }, [email]);
  const handleClickCheckBtn = React.useCallback(async () => {
    if (!code) {
      setCodeStatus(CodeStatus.empty);
    } else {
      setCodeStatus("");
      const response = await checkCode({ email, code });

      if (response.result) {
        setCodeStatus(CodeStatus.checkSuccess);
        setIsCodeChecked(true);
      } else setCodeStatus(CodeStatus.checkFailure);
    }
  }, [code]);

  return (
    <InputsContainer>
      <Input isAct={false}>
        <label htmlFor="">이메일 주소</label>
        <div>
          <input type="text" value={email} onChange={handleChangeEmail} />
          <button onClick={handleClickSendBtn}>인증번호 전송</button>
        </div>
        <p>{emailStatus}</p>
      </Input>
      <Input isAct={false}>
        <label htmlFor="">인증 번호</label>
        <div>
          <input type="text" value={code} onChange={handleChangeCode} />
          <button onClick={handleClickCheckBtn}>인증 확인</button>
        </div>
        <p>{codeStatus}</p>
      </Input>
    </InputsContainer>
  );
};

export default AuthenticationInputs;
