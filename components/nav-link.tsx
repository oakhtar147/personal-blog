"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
	href,
	className,
	children,
	...props
}: React.ComponentProps<typeof Link>) {
	const pathname = usePathname();
	const active = pathname.includes(href.toString());

	return (
		<Link
			href={href}
			data-active={active}
			className={cn(
				"px-2 hover:bg-muted rounded-md font-extrabold text-white tracking-normal transition-all data-[active=true]:bg-muted",
				className
			)}
		>
			{children}
		</Link>
	);
}
