import TextareaAutosize from "react-textarea-autosize";


export default function Title() {
  return (
    <TextareaAutosize
      className={`resize-none focus:shadow-[-4px_0_0_#d1d5db] px-32 pl-8 w-full text-gray-800 font-semibold text-3xl md:text-4xl focus:outline-none overflow-hidden
        font-barlow`}
      placeholder='Title'
      id='title'
      name='title'
    />
  );
}
