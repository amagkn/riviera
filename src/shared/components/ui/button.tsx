import React from "react";
import { Button as _Button, ButtonProps as _ButtonProps } from "@nextui-org/react";

interface ButtonProps extends Pick<_ButtonProps, "color" | "children" | "className" | "onClick"> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <_Button {...props}>{children}</_Button>;
};
