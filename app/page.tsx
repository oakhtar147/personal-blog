import { cn, getPostPath } from "@/lib/utils";
import fs from "fs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";

export default async function Home() {
	const post = fs.readFileSync(getPostPath("welcome"));
	const serialized = await serialize(post, { parseFrontmatter: true });

	return (
		<main className="h-full">
			<MDXRemote
				source={post}
				components={{
					h1: (props) => (
						<h1
							{...props}
							className={cn(
								"text-[50%] font-extrabold uppercase font-sans text-white"
							)}
						/>
					),
				}}
			/>
		</main>
	);
}
