import React from "react";
import { Category } from "./models";
import { Header, Size } from "@/shared/ui";
import Link from "next/link";

interface CategoryBlockProps {
  category: Category;
  categoryPosition: number;
}

export const CategoryBlock: React.FC<CategoryBlockProps> = ({ category, categoryPosition }) => {
  return (
    <div>
      <Header size={Size.sm}>{category.title}</Header>

      <ul>
        {category.articles.map((article, i) => (
          <li key={article.title} className="my-2">
            <span className="mr-4">{categoryPosition.toString() + `.${i + 1}`}</span>
            <Link className="underline text-[#84a0ef]" href={article.url}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
