import Image from "next/image";

export default function ImageContainer({ src }: { src: string }) {
  return (
    <div className='relative aspect-square md:aspect-video w-24 md:w-full shrink-0 '>
      <Image
        src={src}
        fill
        alt='Picture of the author'
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
