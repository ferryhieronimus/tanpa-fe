"use client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClientInstance } from "@/context/query-client-context";
import { createArticle } from "@/api/api-article";

export function useCreateArticle() {
  const { queryClient } = useQueryClientInstance();

  return useMutation({
    mutationFn: createArticle,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["articles"] });
      }
    },
  });
}
