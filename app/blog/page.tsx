import { Blog, allBlogs } from "@/.contentlayer/generated";
import Link from "next/link";

function BlogLink(blog: Blog) {
	return (
		<div className="mb-8">
			<h2 className="mb-1 text-xl">
				<Link
					href={blog.url}
					className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
				>
					{blog.title}
				</Link>
			</h2>
			<time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
				{new Date(blog.date).toLocaleDateString()}
			</time>
		</div>
	);
}

export default async function Blog() {
	return (
		<main className="h-full">
			{allBlogs.map((blog, idx) => (
				<BlogLink key={idx} {...blog} />
			))}
		</main>
	);
}
