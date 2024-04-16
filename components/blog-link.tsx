import { Blog } from "@/.contentlayer/generated"
import { formatBlogDate } from "@/lib/utils"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { mdxComponents } from "./mdx-content"

type BlogLinkProps = {
  blog: Blog
}

export function BlogLink({ blog }: BlogLinkProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <Link href={blog.url} className="hover:underline">
          <mdxComponents.h3 className="line-clamp-2">
            {blog.title}
          </mdxComponents.h3>
        </Link>
        <time
          dateTime={blog.date}
          className="shrink-0 font-sans text-xs font-semibold uppercase"
        >
          {formatBlogDate(blog.date)}
        </time>
      </div>
      <div className="flex items-end  gap-2">
        <mdxComponents.p className="!mt-1 line-clamp-2 grow text-lg">
          {blog.description}
        </mdxComponents.p>
        <Link
          href={blog.url}
          className="inline-flex shrink-0 items-center gap-1 text-sm leading-[inherit] text-white underline"
        >
          Continue
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  )
}
