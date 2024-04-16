import { allBlogs as _blogs } from "@/.contentlayer/generated"
import { getPublishedBlogs } from "@/lib/content"
import { baseUrl } from "app/sitemap"

export async function GET() {
  let allBlogs = getPublishedBlogs(_blogs, { sort: true })

  const itemsXml = allBlogs
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post.slug}</link>
          <description>${post.description || ""}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        </item>`
    )
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>My Portfolio</title>
        <link>${baseUrl}</link>
        <description>This is my portfolio RSS feed</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}
