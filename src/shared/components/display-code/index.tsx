"use client";

import React from "react";
import { Intrigue } from "@/shared/ui/intrigue";

interface DisplayCodeProps {
  template: string;
  blocks: string[];
}

export const DisplayCode: React.FC<DisplayCodeProps> = ({ template, blocks }) => {
  const splitted = template.split("$BLOCK$");

  return (
    <pre>
      <code>
        {splitted.map((str, i) => (
          <>
            {str}
            {i !== splitted.length - 1 && <Intrigue>{blocks[i]}</Intrigue>}
          </>
        ))}
      </code>
    </pre>
  );
};
