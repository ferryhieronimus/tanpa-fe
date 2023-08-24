"use client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClientInstance } from "@/context/query-client-context";
import { signup } from "@/api/api-auth";

export function useSignup() {
  const { queryClient } = useQueryClientInstance();

  return useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
}
