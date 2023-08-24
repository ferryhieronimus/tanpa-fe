export default function AvatarGroup() {
  return (
    <div className='flex gap-2 md:mt-4 items-center'>
      <div className='avatar placeholder'>
        <div className='bg-neutral-focus text-neutral-content rounded-full w-5'>
          <span className="text-xs">F</span>
        </div>
      </div>
      <div className="text-sm text-neutral-700">Ferry</div>
    </div>
  );
}
