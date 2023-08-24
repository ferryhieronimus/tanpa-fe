import Link from "next/link";
import slugify from "slugify";

export default function Info({ date, tags }: { date: string; tags: string[] }) {
  return (
    <div className='flex leading-5 text-xs md:text-sm md:leading-5 items-center gap-4 font-dmSans'>
      <p className='text-neutral-500'>{date}</p>
      <Link
        href={`/tag/${slugify(tags[0], {
          lower: true,
          strict: true,
        })}`}
      >
        <p className='text-[#60934c] underline'>{tags[0]}</p>
      </Link>
    </div>
  );
}
