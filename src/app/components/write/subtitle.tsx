import TextareaAutosize from "react-textarea-autosize";

export default function Subtitle() {
  return (
    <TextareaAutosize
      className='resize-none focus:shadow-[-4px_0_0_#d1d5db] px-32 pl-8 w-full text-gray-600 text-lg md:text-xl focus:outline-none overflow-hidden font-dmSans'
      placeholder='Subtitle'
      id='subtitle'
      name='subtitle'
    />
  );
}
