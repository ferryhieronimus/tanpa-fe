export default function Subtitle({ children }: { children: string }) {
  return (
    <p className='text-zinc-500 text-xs md:text-base mb-2 md:mb-8 line-clamp-1 md:line-clamp-2 leading-5 tracking-wide'>
      {children}
    </p>
  );
}
