export type LoginTypes = {
  username: string;
  password: string;
};

export type SignUp = {
  username: string;
  email: string;
  password: string;
};

export type CompleteRegistration = {
  firstName: string;
  lastName: string | null;
  bio: string | null;
};

export type Article = {
  id: number;
  title: string;
  subtitle: string;
  coverImgURI: string;
  content: string;
  tags: string[];
  creator: User;
  createdAt: string;
  updatedAt: string;
};

export type CreateArticle = {
  title: string;
  subtitle: string;
  coverImgURI: string;
  content: string;
  tags: string[];
};

export type Articles = {
  articles: Article[];
  nextCursor: string;
};

export type User = {
  username: string;
  email: string;
  firstName: string;
  lastName: string | null;
  bio: string | null;
};

export type Tag = {
  id: string;
  name: string;
};

export type TagOption = {
  value: string;
  label: string;
};

export type UseArticlesProps = {
  queryKey: Array<any>;
  queryFn: ({
    pageParam,
  }: {
    pageParam?: number | undefined;
  }) => Promise<Articles>;
};
