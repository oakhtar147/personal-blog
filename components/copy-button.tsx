"use client";

import { cn } from "@/lib/utils";
import { CheckIcon, CopyIcon } from "@radix-ui/react-icons";
import React from "react";

export function CopyButton({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const [loading, setLoading] = React.useState(false);

  return (
    <button
      {...props}
      onClick={async () => {
        setLoading(true);
        await navigator.clipboard.writeText(window.location.href);
        setTimeout(() => setLoading(false), 1000);
      }}
      className={cn(
        "bg-muted hover:bg-muted/80 inline-flex h-7 items-center rounded-sm px-2 py-1 font-sans text-sm text-white shadow-sm transition-all hover:scale-[.997]",
        className,
      )}
    >
      {children}
      <span className="relative h-full w-4">
        <CheckIcon
          className={cn(
            "absolute right-[-11px] top-[3px] mr-2 text-green-500 opacity-0 transition-opacity",
            loading && "opacity-100",
          )}
        />
        <CopyIcon
          className={cn(
            "absolute right-[-11px] top-[3px] mr-2",
            loading && "opacity-0 transition-opacity",
          )}
        />
      </span>
    </button>
  );
}
