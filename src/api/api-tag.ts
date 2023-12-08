import { handleResponse } from "@/lib/handle-response";
import { Tag } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function getTagById(id: string): Promise<Tag> {
  const response = await fetch(`${BASE_URL}/api/v1/tags/` + id, {
    method: "GET",
    credentials: "include",
  });

  return handleResponse<Tag>(response);
}

export async function getTags(): Promise<Tag[]> {
  const response = await fetch(`${BASE_URL}/api/v1/tags/`, {
    method: "GET",
    credentials: "include",
  });

  return handleResponse<Tag[]>(response);
}
