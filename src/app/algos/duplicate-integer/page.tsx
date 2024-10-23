import React from "react";
import { Header, Paragraph, Size } from "@/shared/ui";
import { DisplayCode } from "@/shared/components/display-code";
import { solutionBlocks, solutionTemplate } from "./solution";

const DuplicateInteger: React.FC = () => {
  return (
    <div className="grid grid-cols-2 divide-x-1 h-[100%]">
      <div className="px-6">
        <Header size={Size.l}>Дублирующееся число</Header>

        <Header size={Size.m}>Условие задачи:</Header>

        <Paragraph>
          Если задан целочисленный массив nums, верните true, если любое значение встречается в массиве хотя бы дважды,
          и верните false, если каждый элемент отличается от другого.
        </Paragraph>
      </div>

      <div className="px-6">
        <DisplayCode template={solutionTemplate} blocks={solutionBlocks} />
      </div>
    </div>
  );
};

export default DuplicateInteger;
