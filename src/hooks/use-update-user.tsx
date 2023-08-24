"use client";
import { useMutation } from "@tanstack/react-query";
import { useQueryClientInstance } from "@/context/query-client-context";
import { editUser } from "@/api/api-auth";

export function useUpdateUser() {
  const { queryClient } = useQueryClientInstance();

  return useMutation({
    mutationFn: editUser,
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }
    },
  });
}
