import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto min-h-min max-w-4xl px-8 bg-stone-800">
      {children}
    </div>
  );
};

export default Container;
