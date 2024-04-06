import { allBlogs } from "@/.contentlayer/generated";
import { BlogFooter } from "@/components/blog-footer";
import { MDXContent } from "@/components/mdx-content";
import { notFound } from "next/navigation";

interface BlogPageParams {
	params: {
		slug: string;
	};
}

export default function Blog({ params }: BlogPageParams) {
	const blog = allBlogs.find((blog) => blog.slug === params.slug);

	if (!blog?.body.raw) {
		return notFound();
	}

	return (
		<article>
			<MDXContent source={blog.body.code} />
			<BlogFooter dateWritten={new Date(blog.date)} />
		</article>
	);
}
