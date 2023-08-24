import Image from "next/image";

export default function ImageContainer({ src }: { src: string }) {
  return (
    <div className='relative aspect-video w-full shrink-0'>
      <Image
        src={src}
        fill
        alt='Picture of the author'
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
