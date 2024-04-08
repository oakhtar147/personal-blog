import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

export const Blog = defineDocumentType(() => ({
	name: "Blog",
	contentType: "mdx",
	filePathPattern: `**/*.mdx`,
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		date: { type: "date", required: true },
		published: { type: "boolean", required: true },
		imageDirPath: { type: "string", required: false },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
		},
		slug: {
			type: "string",
			resolve: (blog) => blog._raw.sourceFileName.replace(/\.mdx$/, ""),
		},
	},
}));

export default makeSource({
	contentDirPath: "content",
	documentTypes: [Blog],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			// @ts-expect-error
			[rehypePrettyCode, { theme: "vesper" }],
			[rehypeSlug],
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["subheading-link"],
						ariaLabel: "Link to section",
						__isAnchorLink__: true,
					},
				},
			],
			() => (tree) => {
				visit(tree, (node) => {
					if (node.type === "element" && node.tagName === "p") {
						if (node.children.length) {
							const [imgEl] = node.children;
							node.properties.__hasImageDescendant__ = imgEl.tagName === "img";
							return;
						}

						node.properties.__hasImageDescendant__ = false;
					}
				});
			},
		],
	},
});
