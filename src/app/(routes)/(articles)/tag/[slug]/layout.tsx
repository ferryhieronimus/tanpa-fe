import { getTagById } from "@/api/api-tag";
import Banner from "@/app/components/banner";

export default async function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const tag = params.slug;
  const data = await getTagById(tag);

  return (
    <>
      <Banner data={data} />
      {children}
    </>
  );
}
