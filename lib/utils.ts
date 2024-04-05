import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getPostPath(...path: string[]) {
	return process.cwd() + "/posts/" + path.join("/") + ".mdx";
}
