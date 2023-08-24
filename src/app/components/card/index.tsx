import ImageContainer from "./image-container";
import { Article as ArticleType } from "@/types";
import AvatarGroup from "./avatar-group";
import Subtitle from "./subtitle";
import Title from "./title";
import dayjs from "dayjs";
import slugify from "slugify";
import Link from "next/link";
import Info from "./info";

export default function Card({ data }: { data: ArticleType }) {
  return (
    <div className='md:col-span-6 lg:col-span-4'>
      <div className='flex flex-row-reverse md:flex-col gap-2 md:gap-0 justify-between h-full'>
        <Link
          href={`/article/${slugify(data.title, {
            lower: true,
            strict: true,
          })}-${data.id}`}
        >
          <ImageContainer src={data.coverImgURI} />
        </Link>

        <div className='flex flex-col h-full justify-between'>
          <div className='flex flex-col gap-1 md:gap-2'>
            <AvatarGroup />
            <Link
              href={`/article/${slugify(data.title, {
                lower: true,
                strict: true,
              })}-${data.id}`}
            >
              <Title>{data.title}</Title>
            </Link>
            <Link
              href={`/article/${slugify(data.title, {
                lower: true,
                strict: true,
              })}-${data.id}`}
            >
              <Subtitle>{data.subtitle}</Subtitle>
            </Link>
          </div>

          <Info
            date={dayjs(data.createdAt).format("MMM D, YYYY")}
            tags={data.tags}
          />
        </div>
      </div>
    </div>
  );
}
