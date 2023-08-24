"use client";
import { cookies } from "next/headers";
import { useMutation } from "@tanstack/react-query";
import { useQueryClientInstance } from "@/context/query-client-context";
import { logout } from "@/api/api-auth";

export function useLogout() {
  const { queryClient } = useQueryClientInstance();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.resetQueries({ queryKey: ["user"], exact: true });
    },
  });
}
