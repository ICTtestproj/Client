import * as React from "react";

import { Input, Button } from "../../../../../packages/DesignSystem";
import { SignInContentContainer } from "./style";
import { signIn } from "../../../remotes/SignInAPI";

const SignInContent: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isEmailSelected, setIsEmailSelected] = React.useState<boolean>(false);
  const [isPasswordSelected, setIsPasswordSelected] = React.useState<boolean>(
    false
  );

  const handleChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );
  const handleChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  const handleFocusInInput = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      switch (e.target.id) {
        case "input_email":
          setIsEmailSelected(true);
          break;
        case "input_password":
          setIsPasswordSelected(true);
          break;
        default:
          break;
      }
    },
    []
  );

  const handleFocusOutInput = React.useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      switch (e.target.id) {
        case "input_email":
          setIsEmailSelected(false);
          break;
        case "input_password":
          setIsPasswordSelected(false);
          break;
        default:
          break;
      }
    },
    []
  );

  const handleClickLoginButton = React.useCallback(() => {
    //    window.location.hash = "#/mypage";
    const response = signIn({
      email,
      password
    });

    console.log(response);
  }, [email, password]);

  return (
    <SignInContentContainer>
      <Input isAct={isEmailSelected}>
        <label htmlFor="input_email">이메일</label>
        <div>
          <input
            type="text"
            id="input_email"
            value={email}
            onFocus={e => handleFocusInInput(e)}
            onBlur={e => handleFocusOutInput(e)}
            onChange={e => handleChangeEmail(e)}
          />
        </div>
      </Input>
      <Input isAct={isPasswordSelected}>
        <label htmlFor="input_password">비밀번호</label>
        <div>
          <input
            type="text"
            id="input_password"
            value={password}
            onFocus={e => handleFocusInInput(e)}
            onBlur={e => handleFocusOutInput(e)}
            onChange={e => handleChangePassword(e)}
          />
        </div>
      </Input>

      <Button className="btn_completion" onClick={handleClickLoginButton}>
        로그인
      </Button>
    </SignInContentContainer>
  );
};

export default SignInContent;
