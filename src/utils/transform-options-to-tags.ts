import { TagOption } from "@/types";

export default function TranformOptionsToTags(options: TagOption[]) {
  return options.map((option) => option.label);
}
