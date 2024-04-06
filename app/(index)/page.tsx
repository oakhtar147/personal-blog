import { allBlogs } from "@/.contentlayer/generated";
import { BlogLink } from "@/components/blog-link";
import { H2, P } from "@/components/typography";

export default async function Home() {
	return (
		<main className="h-full text-lg">
			<P font="sans">I build things using code.</P>
			<P font="sans">
				Currently, Software Engineer at Merantix Momentum. Located in Berlin,
				Germany.
			</P>
			<H2 className="my-6">Latest blogs</H2>
			{allBlogs.slice(0, 5).map((blog) => (
				<BlogLink blog={blog} key={blog.slug} />
			))}
		</main>
	);
}
