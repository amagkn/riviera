import React from "react";
import { algos } from "@/entities/algos";

interface ViewAlgoPageProps {
  params: {
    slug: string;
  };
}

const ViewAlgoPage: React.FC<ViewAlgoPageProps> = ({ params }) => {
  const { Solution, Description } = algos[params.slug];

  return (
    <div className="grid grid-cols-2 divide-x-1 h-[100%]">
      <div className="px-2">
        <Description />
      </div>

      <div className="px-2">
        <Solution />
      </div>
    </div>
  );
};

export default ViewAlgoPage;
