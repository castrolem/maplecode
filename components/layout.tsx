import { PropsWithChildren } from "react";

import Container from "./container";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
