import * as React from "react";

import { InputProps } from "..";
import { SInput } from "./style";

const Input: React.FC<InputProps> = ({ children, isAct }) => {
  return <SInput isAct={isAct}>{children}</SInput>;
};

export default Input;
