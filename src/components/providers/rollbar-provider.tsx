"use client";

import { clientConfig } from "@/lib/rollbar";
import { ErrorBoundary, Provider } from "@rollbar/react";

type RollbarProviderProps = Readonly<{
  children: React.ReactNode;
}>;

const FallbackComponent = () => (
  <p style={{ color: "red" }}>Oops, there was an error.</p>
);

export default function RollbarProvider({ children }: RollbarProviderProps) {
  return (
    <Provider config={clientConfig}>
      <ErrorBoundary fallbackUI={FallbackComponent}>{children}</ErrorBoundary>
    </Provider>
  );
}
