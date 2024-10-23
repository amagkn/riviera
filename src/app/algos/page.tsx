import React from "react";
import { PageDescription } from "@/entities/page-description";
import { AlgosContent } from "@/features/algos";
import { Paragraph } from "@/shared/ui";

const PAGE_TITLE = "Алгоритмы и Структуры Данных";
const PAGE_CONTENT = (
  <>
    <Paragraph>Овладейте основами алгоритмов и структур данных — ключевыми навыками для любого программиста.</Paragraph>
    <Paragraph>
      На этой странице вы найдете пошаговые решения задач, которые помогут вам разобраться с фундаментальными
      концепциями и их применением на практике.
    </Paragraph>
  </>
);

const HomePage: React.FC = () => {
  return (
    <div>
      <PageDescription title={PAGE_TITLE} content={PAGE_CONTENT} />
      <AlgosContent />
    </div>
  );
};

export default HomePage;
