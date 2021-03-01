import * as React from "react";

import { ButtonProps } from "..";
import { SButton } from "./style";

function Button({ className, children }: ButtonProps) {
  return <SButton className={className}>{children}</SButton>;
}

export default Button;
