export default function Title({ children }: { children: string }) {
  return (
    <div className='text-3xl md:text-4xl font-bold text-neutral-800 font-barlow'>
      {children}
    </div>
  );
}
