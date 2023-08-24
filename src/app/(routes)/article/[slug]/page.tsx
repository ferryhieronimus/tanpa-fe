import Article from "@/app/components/article";
import getIdFromSlug from "@/utils/get-article-id-from-slug";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const id = getIdFromSlug(params.slug);

  return <Article id={id} />;
}
