"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/api/api-auth";
import { User } from "../../types";
import Loading from "@/app/loading";
import Registration from "@/app/components/registration";
import Error from "@/app/error";

const AuthContext = React.createContext<User | null>(null);

export const useAuth = () => React.useContext(AuthContext);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading, isRefetching, isError, refetch, error } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    retry: false,
  });
  
  if (isLoading || isRefetching) return <Loading />;

  if (isError) {
    return <Error reset={refetch} />;
  }

  if (data && !data.firstName) {
    return <Registration />
  }

  return (
    <AuthContext.Provider value={data ?? null}>{children}</AuthContext.Provider>
  );
}
