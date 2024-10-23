import React, { PropsWithChildren } from "react";
import { Size } from "@/shared/ui";

interface HeaderProps extends PropsWithChildren {
  size: Size;
}

export const Header: React.FC<HeaderProps> = ({ size, children }) => {
  switch (size) {
    case Size.sm:
      return <h3 className="font-bold my-5">{children}</h3>;
    case Size.m:
      return <h2 className="text-xl font-bold my-5">{children}</h2>;
    case Size.l:
      return <h1 className="text-2xl font-bold my-5">{children}</h1>;
  }
};
