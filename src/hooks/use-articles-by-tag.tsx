import { useInfiniteQuery } from "@tanstack/react-query";
import { Articles } from "@/types";
import { getArticlesByTag } from "@/api/api-article";

export function useArticlesByTag(tag: string) {
  return useInfiniteQuery<Articles>({
    queryKey: ["articles-by-tag", tag],
    queryFn: () => getArticlesByTag(tag),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
