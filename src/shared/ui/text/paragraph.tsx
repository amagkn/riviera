import React, { PropsWithChildren } from "react";

interface ParagraphProps extends PropsWithChildren {}

export const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <p className="my-4">{children}</p>;
};
