import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const Container = ({ children }: Props) => {
  return <div className="mx-auto min-h-min px-[1vw]">{children}</div>;
};

export default Container;
