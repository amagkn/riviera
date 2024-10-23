interface Article {
  title: string;
  url: string;
}

export interface Category {
  title: string;

  articles: Article[];
}
