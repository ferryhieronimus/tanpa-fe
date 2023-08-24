export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex mx-8 lg:mx-32 justify-center pt-16 min-h-screen'>{children}</div>
  );
}
