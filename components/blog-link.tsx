import { Blog } from "@/.contentlayer/generated";
import { formatBlogDate } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { H3, P } from "./mdx";

type BlogLinkProps = {
	blog: Blog;
};

export function BlogLink({ blog }: BlogLinkProps) {
	return (
		<div>
			<div className="flex justify-between gap-3 items-baseline">
				<Link href={blog.url} className="hover:underline">
					<H3 className="line-clamp-2">{blog.title}</H3>
				</Link>
				<time
					dateTime={blog.date}
					className="text-xs font-sans uppercase font-semibold shrink-0"
				>
					{formatBlogDate(blog.date)}
				</time>
			</div>
			<div className="flex items-end  gap-2">
				<P className="!mt-1 text-lg line-clamp-2 grow">{blog.description}</P>
				<Link
					href={blog.url}
					className="underline inline-flex items-center gap-1 text-sm shrink-0 leading-[inherit] text-white"
				>
					Continue
					<ArrowRightIcon />
				</Link>
			</div>
		</div>
	);
}
