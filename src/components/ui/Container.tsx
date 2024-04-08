import { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerType) => {
  return <div className="mx-auto w-full max-w-screen-xl p-4">{children}</div>;
};
