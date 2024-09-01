"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const ButtonsCard = ({
  children,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-4 bg-transparent rounded-md transition-colors duration-200",
        className
      )}
    >
      {children}
    </button>
  );
};
