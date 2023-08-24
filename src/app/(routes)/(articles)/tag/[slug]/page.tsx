import { dehydrate } from "@tanstack/react-query";
import { ReactQueryHydrate } from "@/lib/react-query/react-query-hydrate";
import { getArticlesByTag } from "@/api/api-article";
import getQueryClient from "@/lib/react-query/get-query-client";
import { ArticlesFromTag } from "@/app/components/articles";

export default async function TagPage({
  params,
}: {
  params: { slug: string };
}) {
  const tag = params.slug;

  const queryClient = getQueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["articles-by-tag", tag],
    queryFn: () => getArticlesByTag(tag),
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <ReactQueryHydrate state={dehydratedState}>
        <ArticlesFromTag tag={tag} />
      </ReactQueryHydrate>
    </>
  );
}
