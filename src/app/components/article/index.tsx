import { getArticleById } from "@/api/api-article";
import AvatarGroup from "./avatar-group";
import Subtitle from "./subtitle";
import Title from "./title";
import ImageContainer from "./image-container";
import Link from "next/link";
import slugify from "slugify";

export default async function Article({ id }: { id: string }) {
  const data = await getArticleById(id);

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className='flex flex-col gap-4 px-4 w-full max-w-2xl'>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <div className='my-4'>
        <AvatarGroup data={data} />
      </div>
      <div className='md:my-4'>
        <ImageContainer src={data.coverImgURI} />
      </div>
      <div className='whitespace-pre-line max-w-2xl leading-loose md:text-lg text-neutral-800 md:leading-loose'>
        {data.content}
      </div>

      <div className='flex flex-wrap gap-x-4 max-w-2xl leading-loose mt-8 md:text-lg md:leading-loose text-neutral-600'>
        {data.tags.map((tag, index) => (
          <Link
            key={index}
            href={`/tag/${slugify(tag, {
              lower: true,
              strict: true,
            })}`}
          >
            <span key={index} className='text-[#60934c] underline'>
              {tag}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
