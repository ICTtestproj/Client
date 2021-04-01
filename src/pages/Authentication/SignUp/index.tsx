import * as React from "react";

import {
  InfoInputsContainer,
  Title
} from "domains/Authentication/components/SignUp";
import {useInputState} from 'packages/hooks';

const SignUp: React.FC = () => {
  return (
    <div>
      <Title />
      <InfoInputsContainer />
    </div>
  );
};

export default SignUp;
 