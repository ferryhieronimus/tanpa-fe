import { handleResponse } from "@/lib/handle-response";
import { Tag } from "@/types";

export async function getTagById(id: string): Promise<Tag> {
  const response = await fetch("http://localhost:3000/api/v1/tags/" + id, {
    method: "GET",
    credentials: "include",
  });

  return handleResponse<Tag>(response);
}

export async function getTags(): Promise<Tag[]> {
  const response = await fetch("http://localhost:3000/api/v1/tags/", {
    method: "GET",
    credentials: "include",
  });

  return handleResponse<Tag[]>(response);
}
