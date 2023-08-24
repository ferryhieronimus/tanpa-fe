export default function CardSkeleton() {
  return (
    <div className='w-full flex-col justify-between flex gap-8'>
      <div className='flex-col flex gap-4'>
        <div className='h-4 bg-gray-200 rounded-full w-96 '></div>
        <div className='h-2 bg-gray-200 rounded-full max-w-[360px]'></div>
        <div className='h-2 bg-gray-200 rounded-full max-w-[330px] '></div>
      </div>
      <div className='h-2 bg-gray-200 rounded-full max-w-[360px]'></div>
    </div>
  );
}
