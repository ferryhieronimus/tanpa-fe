"use client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClientInstance } from "@/context/query-client-context";
import { deleteArticleById } from "@/api/api-article";

export function useDeleteArticle(id: string) {
  const { queryClient } = useQueryClientInstance();

  return useMutation({
    mutationFn: () => deleteArticleById(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
}
