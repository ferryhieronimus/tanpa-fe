export default function Loading() {
  const renderSkeleton = () => {
    const skeletons = [];

    for (let i = 1; i <= 3; i++) {
      skeletons.push(
        <div className='flex flex-col gap-2 col-span-12 md:col-span-4' key={i}>
          <div className='w-full aspect-video bg-gray-200 rounded-md'></div>

          <div className='flex gap-8 items-center'>
            <div className='w-12 h-12 bg-gray-200 rounded-full'></div>
            <div className='flex flex-col w-48 gap-2'>
              <div className='w-1/2 h-4 bg-gray-200 rounded-md'></div>
            </div>
          </div>
          <ul className='flex gap-4 flex-col'>
            <li className='w-full h-4 bg-gray-200 rounded-md'></li>
            <li className='w-2/3 h-4 bg-gray-200 rounded-md'></li>
          </ul>
          <ul className='flex gap-4 mt-8 w-2/3'>
            <li className='w-1/2 h-4 bg-gray-200 rounded-md'></li>
            <li className='w-full h-4 bg-gray-200 rounded-md'></li>
          </ul>
        </div>
      );
    }

    return skeletons;
  };
  return (
    <div className='max-w-6xl grid grid-cols-12 gap-8 w-full mt-4 mx-auto'>

      <div className='w-full h-64 bg-gray-200 rounded-md col-span-12'></div>
      {renderSkeleton()}
    </div>
  );
}
