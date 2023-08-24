import { getTags } from "@/api/api-tag";
import Category from "@/app/components/category";

export default async function layout({ children }: { children: React.ReactNode }) {
  const category = await getTags()
  return (
    <>
      <Category category={category}/>
      {children}
    </>
  );
}
