export default function Loading() {
  return (
    <div className='max-w-2xl w-full px-4 min-h-screen'>
      <div className='flex flex-col gap-4 w-full'>
        <h3 className='h-8 bg-gray-200 rounded-md dark:bg-gray-700'></h3>
        <div className='flex gap-8 items-center'>
          <div className='w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700'></div>
          <div className='flex flex-col w-48 gap-2'>
            <div className='w-1/2 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></div>
            <div className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></div>
          </div>
        </div>
        <ul className='flex gap-4 flex-col'>
          <li className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-2/3 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-1/2 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
        </ul>
        <ul className='flex gap-4 mt-8 flex-col w-2/3'>
          <li className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-3/4 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-3/4 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
        </ul>
        <ul className='flex gap-4 mt-8 flex-col'>
          <li className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-1/2 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-2/3 h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
          <li className='w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700'></li>
        </ul>
      </div>
    </div>
  );
}
