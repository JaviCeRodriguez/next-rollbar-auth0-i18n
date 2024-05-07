"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRollbar } from "@rollbar/react";

export default function NewBookingError({
  error,
  reset,
}: Readonly<{
  error: Error & { digest?: string };
  reset: () => void;
}>) {
  const rollbar = useRollbar();

  useEffect(() => {
    rollbar.error(error);
  }, [error, rollbar]);

  return (
    <>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
