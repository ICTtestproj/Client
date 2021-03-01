import * as React from "react";

import { STitle } from "./style";

const Title: React.FC = ({ children }) => {
  return (
    <>
      <STitle>
        <h1>{children}</h1>
        <div />
      </STitle>
    </>
  );
};

export default Title;
