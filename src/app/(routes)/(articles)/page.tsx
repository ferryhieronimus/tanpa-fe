import Hero from "../../components/hero";
import { dehydrate } from "@tanstack/react-query";
import { ReactQueryHydrate } from "@/lib/react-query/react-query-hydrate";
import { getArticles } from "@/api/api-article";
import getQueryClient from "@/lib/react-query/get-query-client";
import { ArticlesFromHome } from "@/app/components/articles";

export default async function Homepage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <Hero />
      <ReactQueryHydrate state={dehydratedState}>
        <ArticlesFromHome />
      </ReactQueryHydrate>
    </>
  );
}
