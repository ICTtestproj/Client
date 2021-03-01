import * as React from "react";

import {
  AuthenticationInputs,
  Button,
  PasswordInputs,
  PersonalInfoInputs,
  Title,
} from "../../../domains/Authentication/components/SignUp";

const SignUp: React.FC = () => {
  return (
    <div>
      <Title />
      <PersonalInfoInputs />
      <AuthenticationInputs />
      <PasswordInputs />
      <Button />
    </div>
  );
};

export default SignUp;
