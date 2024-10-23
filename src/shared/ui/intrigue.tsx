"use client";

import React, { PropsWithChildren, useState } from "react";
import { cn } from "@/shared/utils";

interface IntrigueProps extends PropsWithChildren {}

export const Intrigue: React.FC<IntrigueProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const clickHandler = () => setVisible(true);

  return (
    <span onClick={clickHandler} className={cn(!visible && "blur cursor-pointer")}>
      {children}
    </span>
  );
};
