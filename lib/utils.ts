import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatBlogDate(date: string | Date) {
	const formatter = new Intl.DateTimeFormat("en-GB", {
		year: "numeric",
		month: "short",
		day: "2-digit",
	});

	return formatter.format(new Date(date));
}
