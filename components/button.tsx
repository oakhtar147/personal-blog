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
				"bg-muted text-white px-2 py-1 rounded-sm text-sm inline-flex items-center font-sans shadow-sm hover:bg-muted/80 hover:scale-[.997] transition-all",
				className
			)}
		>
			{children}
			{loading ? (
				<CheckIcon className="ml-2 text-green-500" />
			) : (
				<CopyIcon className="ml-2" />
			)}
		</button>
	);
}
