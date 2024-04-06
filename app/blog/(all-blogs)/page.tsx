import { allBlogs } from "@/.contentlayer/generated";
import { BlogLink } from "@/components/blog-link";

export default async function Blog() {
	return (
		<main className="h-full grow space-y-6">
			{allBlogs.map((blog, idx) => (
				<BlogLink key={idx} blog={blog} />
			))}
		</main>
	);
}
