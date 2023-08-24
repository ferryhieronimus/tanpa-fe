import TextareaAutosize from "react-textarea-autosize";

export default function Content() {
  return (
    <TextareaAutosize
      className='resize-none focus:shadow-[-4px_0_0_#d1d5db] px-32 pl-8 mt-4 w-full text-gray-900  md:text-lg focus:outline-none overflow-hidden'
      placeholder='Write your inner voice here ...'
      autoFocus
      id='content'
      name='content'
    />
  );
}
