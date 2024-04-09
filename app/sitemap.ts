import { allBlogs } from "@/.contentlayer/generated";
import { getPublishedBlogs } from "@/lib/content";

export const baseUrl = "https://oakhtar.vercel.app";

export default async function sitemap() {
	let blogs = getPublishedBlogs(allBlogs).map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: post.date,
	}));

	let routes = ["", "/blog"].map((route) => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date().toISOString().split("T")[0],
	}));

	return [...routes, ...blogs];
}
