import React from "react";
import { ALGOS_CONTENTS_ITEMS } from "./items";
import { CategoryBlock } from "@/entities/category-block";

interface AlgosContentProps {}

export const AlgosContent: React.FC<AlgosContentProps> = () => {
  return (
    <div>
      {ALGOS_CONTENTS_ITEMS.map((item) => (
        <CategoryBlock key={item.title} category={item} categoryPosition={1} />
      ))}
    </div>
  );
};
