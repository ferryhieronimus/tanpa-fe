import AsyncSelect from "react-select/async";
import { getTags } from "@/api/api-tag";
import TranformTagsToOptions from "@/utils/transform-tags-to-options";
import { TagOption } from "@/types";

const filterColors = async (inputValue: string) => {
  const tags = await getTags();
  const tagOptions = TranformTagsToOptions(tags);
  return tagOptions.filter((i) =>
    i.value.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise<TagOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

const Tag = ({
  handleChange,
}: {
  handleChange: (selectedOption: TagOption[]) => void;
}) => (
  <AsyncSelect
    placeholder='Add a topic...'
    isMulti
    maxMenuHeight={192}
    cacheOptions
    defaultOptions
    // @ts-ignore
    onChange={handleChange}
    loadOptions={promiseOptions}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,
      colors: {
        ...theme.colors,
        primary: "black",
      },
    })}
  />
);

Tag.displayName = "Tag";

export default Tag;