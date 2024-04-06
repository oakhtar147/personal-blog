import { Blog } from "@/.contentlayer/generated";
import { formatBlogDate } from "@/lib/utils";
import Link from "next/link";
import { H3, P, Time } from "./typography";

type BlogLinkProps = {
	blog: Blog;
};

export function BlogLink({ blog }: BlogLinkProps) {
	return (
		<div className="hover:bg-muted hover:text-white transition-colors p-2 rounded-sm">
			<Link href={blog.url}>
				<div className="flex justify-between items-center">
					<H3>{blog.title}</H3>
					<Time dateTime={blog.date}>{formatBlogDate(blog.date)}</Time>
				</div>
				<P variant="description" className="!mt-1" font="sans">
					{blog.description}
				</P>
			</Link>
		</div>
	);
}
