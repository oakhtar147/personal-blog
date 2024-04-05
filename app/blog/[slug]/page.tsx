import { allBlogs } from "@/.contentlayer/generated";

interface BlogPageParams {
	params: {
		slug: string;
	};
}

export default function Blog({ params }: BlogPageParams) {
	const blog = allBlogs.find((blog) => blog.slug === params.slug);

	return blog?.title;
}
