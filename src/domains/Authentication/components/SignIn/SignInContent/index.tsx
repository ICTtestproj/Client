import * as React from "react";

import { Input, Button } from "../../../../../packages/DesignSystem";
import { SignInContentContainer } from "./style";
import { signIn } from "../../../remotes/SignInAPI";
import { GlobalContext } from "../../../../../packages/contexts/GlobalContext";

const SignInContent: React.FC = () => {
  const [account, setAccount] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [isAccountSelected, setIsAccountSelected] = React.useState<boolean>(
    false
  );
  const [isPasswordSelected, setIsPasswordSelected] = React.useState<boolean>(
    false
  );
  const [inputState, setInputState] = React.useState<string>(" ");
  const { setAccessToken, accessToken } = React.useContext(GlobalContext);

  enum InputsState {
    existNull = "정보를 모두 입력하세요.",
    signinFailure = "이메일 또는 비밀번호가 틀렸습니다."
  }

  const handleChangeEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setAccount(e.target.value);
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
          setIsAccountSelected(true);
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
          setIsAccountSelected(false);
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

  const handleClickLoginButton = React.useCallback(async () => {
    if (account && password) {
      setInputState(" ");

      const response = await signIn({
        account,
        password
      });

      if (response.access_token) {
        setAccessToken(response.access_token);
        console.log(response.access_token);

        window.location.hash = "#/";
      } else {
        setInputState(InputsState.signinFailure);
      }
    } else {
      setInputState(InputsState.existNull);
    }
  }, [account, password, setAccessToken]);

  return (
    <SignInContentContainer>
      <Input isAct={isAccountSelected}>
        <label htmlFor="input_email">이메일</label>
        <div>
          <input
            type="text"
            id="input_email"
            value={account}
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
        <p>{inputState}</p>
      </Input>

      <Button className="btn_completion" onClick={handleClickLoginButton}>
        로그인
      </Button>
    </SignInContentContainer>
  );
};

export default SignInContent;
