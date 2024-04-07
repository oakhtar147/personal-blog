import { Blog } from "@/.contentlayer/generated";

type Options = {
	sort?: boolean;
};

export function getPublishedBlogs(allBlogs: Blog[], opts?: Options) {
	const sort = opts?.sort || false;

	const filtered = allBlogs.filter((blog) => blog.published);

	if (sort) {
		filtered.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
		);
	}

	return filtered;
}

export function getBlogBySlug(allBlogs: Blog[], slug: string) {
	return allBlogs.find((blog) => blog.slug === slug);
}
