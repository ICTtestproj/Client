import * as React from "react";

import {
  Title,
  SignInContent,
  SubOptions,
} from "../../../domains/Authentication/components/SignIn";

const SignIn: React.FC = () => {
  return (
    <div>
      <Title />
      <SignInContent />
      <SubOptions />
    </div>
  );
};

export default SignIn;
