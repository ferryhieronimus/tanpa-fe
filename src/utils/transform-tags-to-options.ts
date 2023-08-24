import { Tag, TagOption } from "@/types";

export default function TranformTagsToOptions(tags: Tag[]): TagOption[] {
  return tags.map((tag) => ({
    value: tag.id,
    label: tag.name,
  }));
}
