import { allBlogs } from "@/.contentlayer/generated"
import { BlogFooter } from "@/components/blog-footer"
import { MDXContent } from "@/components/mdx-content"
import { getBlogBySlug } from "@/lib/content"
import { Metadata, ResolvingMetadata } from "next"
import { notFound } from "next/navigation"

interface BlogPageParams {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: BlogPageParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = getBlogBySlug(allBlogs, params.slug)

  if (!blog) {
    return notFound()
  }

  const { title, description, date, url } = blog
  let ogImage = `/og?title=${encodeURIComponent(blog.title)}`

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      url,
      title,
      description,
      type: "article",
      publishedTime: date,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: BlogPageParams) {
  const blog = getBlogBySlug(allBlogs, params.slug)

  if (!blog?.body.raw) {
    return notFound()
  }

  return (
    <article id={blog.slug}>
      <MDXContent source={blog.body.code} />
      <BlogFooter dateWritten={new Date(blog.date)} />
    </article>
  )
}
