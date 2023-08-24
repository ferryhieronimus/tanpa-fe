import { useInfiniteQuery } from "@tanstack/react-query";
import { Articles } from "@/types";
import { getArticles } from "@/api/api-article";

export function useArticles() {
  return useInfiniteQuery<Articles>({
    queryKey: ["articles"],
    queryFn: getArticles,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}
