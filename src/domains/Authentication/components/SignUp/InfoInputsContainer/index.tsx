import * as React from "react";

import { SInfoInputsContainer } from "./style";

import AuthenticationInputs from "./AuthenticationInputs";
import Button from "./Button";
import PasswordInputs from "./PasswordInputs";
import PersonalInfoInputs from "./PersonalInfoInputs";

const InfoInputsContainer: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [employNum, setEmployNum] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [code, setCode] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [rePassword, setRePassword] = React.useState<string>("");
  const [isAccountChecked, setIsAccountChecked] = React.useState<boolean>(
    false
  );
  const [isCodeChecked, setIsCodeChecked] = React.useState<boolean>(false);
  const [isPasswordChecked, setIsPasswordChecked] = React.useState<boolean>(
    false
  );

  return (
    <SInfoInputsContainer>
      <PersonalInfoInputs
        name={name}
        setName={setName}
        employNum={employNum}
        setEmployNum={setEmployNum}
      />
      <AuthenticationInputs
        email={email}
        setEmail={setEmail}
        code={code}
        setCode={setCode}
        setIsCodeChecked={setIsCodeChecked}
      />
      <PasswordInputs
        password={password}
        setPassword={setPassword}
        rePassword={rePassword}
        setRePassword={setRePassword}
        isPasswordChecked={isPasswordChecked}
        setIsPasswordChecked={setIsPasswordChecked}
      />
      <Button
        isNotEmpty={!!(email && name && password && rePassword && employNum)}
        name={name}
        email={email}
        employNum={employNum}
        password={password}
        isCodeChecked={isCodeChecked}
        isPasswordChecked={isPasswordChecked}
      />
    </SInfoInputsContainer>
  );
};

export default InfoInputsContainer;
