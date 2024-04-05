import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
	name: "Blog",
	contentType: "markdown",
	filePathPattern: `**/*.mdx`,
	fields: {
		title: { type: "string", required: true },
		description: { type: "string", required: true },
		date: { type: "date", required: true },
	},
	computedFields: {
		url: {
			type: "string",
			resolve: (blog) => `/blog/${blog._raw.flattenedPath}`,
		},
		slug: {
			type: "string",
			resolve: (blog) => blog._raw.flattenedPath,
		},
	},
}));

export default makeSource({ contentDirPath: "posts", documentTypes: [Blog] });
