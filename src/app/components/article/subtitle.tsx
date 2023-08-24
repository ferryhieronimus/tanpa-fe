export default function Subtitle({ children }: { children: string }) {
  return (
    <div className={`text-lg md:text-xl text-neutral-500 font-dmSans`}>
      {children}
    </div>
  );
}
