import * as React from "react";

import { ButtonProps } from "..";
import { SButton } from "./style";

function Button({ className, children, onClick }: ButtonProps) {
  React.useEffect(() => {
    
  }, [])

  return <SButton className={className} onClick={onClick}>{children}</SButton>;
}

export default Button;
