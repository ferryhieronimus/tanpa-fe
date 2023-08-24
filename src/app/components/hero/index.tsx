import Image from "next/image";

export default function Hero() {
  return (
    <div className='w-full flex justify-center bg-gray-100 overflow-x-hidden'>
      <div className='max-w-6xl w-full flex justify-center mx-8 lg:mx-32 py-16 gap-8 font-dmSans'>
        <div className='flex-1 flex flex-col justify-between py-6 gap-8'>
          <div className='flex flex-col gap-2'>
            <div className='font-semibold text-lg'>
              Are you surprised that some of us don't have inner voices?
            </div>
            <div>
              Inner voice is a voice inside your head. According to Psychology
              professor Russell Hurlburt,{" "}
              <span className='font-semibold'>only 30 to 50% </span>
              of people have an inner voice. The rest live{" "}
              <span className='italic font-semibold'>tanpa</span> (Indonesian
              for without) inner voice.
            </div>
            <div>
              It turns out that inner voice is common, but it's not a part of
              being human.
            </div>
          </div>

          <div>
            <button className='rounded-full bg-[#8eb47b] text-white px-4 py-2 text-sm h-full'>
              Start Exploring
            </button>
          </div>
        </div>

        <div className='relative w-full flex-1 hidden md:block'>
          <Image priority src='/hero.svg' fill alt='Hero image' />
        </div>
      </div>
    </div>
  );
}
