import React from "react";
import { Input as _Input, InputProps as _InputProps } from "@nextui-org/input";

interface InputProps extends Pick<_InputProps, "startContent"> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return <_Input {...props} />;
};
