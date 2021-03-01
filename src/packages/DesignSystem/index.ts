import { ReactChild } from "react";

import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

export interface ButtonProps {
  className: string;
  children: ReactChild;
}

export interface InputProps {
  isAct: boolean;
}

export { Button, Input, Title };
