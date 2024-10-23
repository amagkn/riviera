import React, { PropsWithChildren, ReactNode } from "react";
import { codeParser, codeParserKeywords } from "@/shared/utils/codeParser";

interface DisplayCodeProps extends PropsWithChildren {
  template: string;
  callback: (keyword: string, i: number) => ReactNode;
}

export const DisplayCode: React.FC<DisplayCodeProps> = ({ template, callback }) => {
  const splitted = codeParser(template);

  const handler = () => {
    let keyWordIndex = 0;

    return (str: string) => {
      if (codeParserKeywords.hasOwnProperty(str)) {
        return callback(str, keyWordIndex++);
      } else {
        return str;
      }
    };
  };

  return (
    <pre>
      <code>{splitted.map(handler())}</code>
    </pre>
  );
};
