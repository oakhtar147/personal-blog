import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

export const Blog = defineDocumentType(() => ({
	name: "Blog",
	contentType: "mdx",
	filePathPattern: `**/*.mdx`,
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		date: { type: "date", required: true },
		published: { type: "boolean", required: true },
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
		rehypePlugins: [
			[
				// @ts-expect-error
				rehypePrettyCode,
				{
					theme: "vesper",
				},
			],
		],
	},
});
