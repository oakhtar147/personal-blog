import { allBlogs } from "@/.contentlayer/generated";
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

	return <MDXContent source={blog.body.code} />;
}
