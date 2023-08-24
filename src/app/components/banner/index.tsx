export default async function Banner({ data }: { data: any }) {
  return (
    <div className='w-full flex justify-center bg-gray-100'>
      <div className='max-w-6xl w-full flex flex-col mx-4 md:mx-8 lg:mx-32 py-16 gap-4'>
        <div className='font-semibold text-3xl font-barlow'>
          {data ? data.name : `No article with tag ${data.name}`}
        </div>
        {data && <p>Discover voices from writers on {data.name}.</p>}
      </div>
    </div>
  );
}
