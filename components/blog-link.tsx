import { Blog } from "@/.contentlayer/generated";
import { formatBlogDate } from "@/lib/utils";
import Link from "next/link";
import { H3, P } from "./mdx";

type BlogLinkProps = {
	blog: Blog;
};

export function BlogLink({ blog }: BlogLinkProps) {
	return (
		<div className="hover:bg-muted hover:text-white transition-colors p-2 rounded-sm">
			<Link href={blog.url}>
				<div className="flex justify-between items-baseline">
					<H3>{blog.title}</H3>
					<time
						dateTime={blog.date}
						className="text-xs font-sans uppercase font-semibold shrink-0"
					>
						{formatBlogDate(blog.date)}
					</time>
				</div>
				<P className="!mt-1 text-md" font="sans">
					{blog.description}
				</P>
			</Link>
		</div>
	);
}
