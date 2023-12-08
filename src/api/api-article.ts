import { handleResponse } from "@/lib/handle-response";
import { Article, Articles, CreateArticle } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArticles({ pageParam = 0 }): Promise<Articles> {
  const response = await fetch(
    `${BASE_URL}/api/v1/articles?cursor=` + pageParam,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  return handleResponse<Articles>(response);
}

export async function getArticleById(id: string): Promise<Article> {
  const response = await fetch(`${BASE_URL}/api/v1/articles/` + id, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  return handleResponse<Article>(response);
}

export async function getArticlesByTag(id: string): Promise<Articles> {
  const response = await fetch(`${BASE_URL}/api/v1/articles/tag/` + id, {
    method: "GET",
    credentials: "include",
    cache: "no-store",
  });

  return handleResponse<Articles>(response);
}

export async function createArticle(
  data: CreateArticle
): Promise<CreateArticle> {
  const response = await fetch(`${BASE_URL}/api/v1/articles`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse<CreateArticle>(response);
}

export async function deleteArticleById(id: string) {
  const response = await fetch(`${BASE_URL}/api/v1/articles/` + id, {
    method: "DELETE",
    credentials: "include",
  });

  return handleResponse(response);
}

export async function generatePutUrl(params: URLSearchParams): Promise<{
  content: {
    key: string;
    url: string;
  };
}> {
  const response = await fetch(
    `${BASE_URL}/api/v1/articles/generate-put-url?` + params,
    {
      credentials: "include",
    }
  );

  return handleResponse(response);
}

export async function generateCoverImageURI(key: string): Promise<{
  content: {
    key: string;
    url: string;
  };
}> {
  const response = await fetch(
    `${BASE_URL}/api/v1/articles/generate-get-url?key=` + key,
    {
      credentials: "include",
    }
  );

  return handleResponse(response);
}