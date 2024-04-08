import { allBlogs } from "@/.contentlayer/generated";
import { BlogLink } from "@/components/blog-link";
import { mdxComponents } from "@/components/mdx-content";
import { getPublishedBlogs } from "@/lib/content";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Osama Akhtar",
	description:
		"I build things using code. Currently, Software Engineer at Merantix Momentum. Located in Berlin, Germany.",
};

export default async function Home() {
	const publishedBlogs = getPublishedBlogs(allBlogs, { sort: true });

	return (
		<main className="h-full text-lg grow">
			<mdxComponents.p>I build things using code.</mdxComponents.p>
			<mdxComponents.p>
				Currently, Software Engineer at Merantix Momentum. Located in Berlin,
				Germany.
			</mdxComponents.p>
			<mdxComponents.h2 className="mt-6">Latest five blogs</mdxComponents.h2>
			<section className="space-y-4">
				{publishedBlogs.slice(0, 5).map((blog) => (
					<BlogLink blog={blog} key={blog.slug} />
				))}
			</section>
		</main>
	);
}
