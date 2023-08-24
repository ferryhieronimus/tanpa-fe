export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center my-16'>{children}</div>
  );
}
