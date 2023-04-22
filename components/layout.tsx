import { PropsWithChildren } from "react";

import Container from "./container";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen ">
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
