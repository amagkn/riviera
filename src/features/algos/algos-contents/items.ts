import { Category } from "@/entities/category-block/models";
import { paths } from "@/shared/paths";

export const ALGOS_CONTENTS_ITEMS: Category[] = [
  {
    title: "Массивы и хэш-таблицы",
    articles: [{ title: "Дублирующееся число", url: paths.algos("duplicate-integer") }],
  },
];
