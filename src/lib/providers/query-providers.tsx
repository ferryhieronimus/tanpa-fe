"use client";

import {
  QueryClientInstanceProvider,
  useQueryClientInstance,
} from "@/context/query-client-context";
import { QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const AppQueryClientInstanceWrapper = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { queryClient } = useQueryClientInstance();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

interface Props {
  children: ReactNode;
}

function QueryProviders({ children }: Props) {
  return (
    <QueryClientInstanceProvider>
      <AppQueryClientInstanceWrapper>{children}</AppQueryClientInstanceWrapper>
    </QueryClientInstanceProvider>
  );
}

export default QueryProviders;
