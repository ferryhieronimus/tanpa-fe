"use client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClientInstance } from "@/context/query-client-context";
import { login } from "@/api/api-auth";

export function useLogin() {
  const { queryClient } = useQueryClientInstance();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
}
