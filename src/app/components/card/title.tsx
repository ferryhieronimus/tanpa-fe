export default function Title({ children }: { children: string }) {
  return (
    <p className='md:text-xl text-neutral-800 font-semibold line-clamp-2 hover:text-[#60934c] hover:underline font-barlow'>
      {children}
    </p>
  );
}
