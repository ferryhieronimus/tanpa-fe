export default function getArticleIdFromSlug(slug: string) {
  const splitArray = slug.split("-");
  const id = splitArray[splitArray.length - 1];
  return id;
}
