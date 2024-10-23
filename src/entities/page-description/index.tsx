import React from "react";
import { Header, Size } from "@/shared/ui";

interface PageDescriptionProps {
  title: string;
  content: React.ReactNode;
}

export const PageDescription: React.FC<PageDescriptionProps> = ({ title, content }) => {
  return (
    <div>
      <Header size={Size.m}>{title}</Header>
      <div>{content}</div>
    </div>
  );
};
