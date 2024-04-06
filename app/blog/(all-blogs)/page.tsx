import { allBlogs } from "@/.contentlayer/generated";
import { BlogLink } from "@/components/blog-link";
import { getPublishedBlogs } from "@/lib/content";

export default async function Blog() {
	const publishedBlogs = getPublishedBlogs(allBlogs, { sort: true });

	return (
		<main className="h-full grow space-y-6">
			{publishedBlogs.map((blog, idx) => (
				<BlogLink key={idx} blog={blog} />
			))}
		</main>
	);
}
