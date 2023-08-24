export default function Loading() {
  return (
    <div className='max-w-2xl w-full px-4'>
      <div className='flex flex-col gap-4 w-full'>
        <div className='h-12 w-1/4 bg-gray-200 rounded-md dark:bg-gray-700'></div>
        <div className='h-8 w-1/6 bg-gray-200 rounded-md dark:bg-gray-700'></div>
        <div className='h-36 bg-gray-200 rounded-md dark:bg-gray-700'></div>
      </div>
    </div>
  );
}
