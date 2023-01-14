import React from "react";

export type Props = { children: React.ReactNode };

export const Pill = ({ children }: Props) => (
  <span className="px-3 py-2 border border-red-200 bg-red-100 rounded-full">
    {children}
  </span>
);
