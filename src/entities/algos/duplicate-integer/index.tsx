import React from "react";
import { Algo } from "@/entities/algos";
import { Header, Paragraph, Size, Intrigue } from "@/shared/ui";
import { solutionBlocks, solutionTemplate } from "./solution";
import { DisplayCode } from "@/shared/components/display-code";

export const DuplicateInteger: Algo = {
  Description: () => (
    <>
      <Header size={Size.l}>Дублирующееся число</Header>

      <Header size={Size.m}>Условие задачи:</Header>

      <Paragraph>
        Если задан целочисленный массив nums, верните true, если любое значение встречается в массиве хотя бы дважды, и
        верните false, если каждый элемент отличается от другого.
      </Paragraph>
    </>
  ),

  Solution: () => (
    <>
      <DisplayCode template={solutionTemplate} callback={(_, i) => <Intrigue key={i}>{solutionBlocks[i]}</Intrigue>} />
    </>
  ),
};
