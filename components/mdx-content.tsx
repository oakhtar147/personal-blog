import { cn } from "@/lib/utils";
import sizeOf from "image-size";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import path from "path";
import React from "react";

export const mdxComponents = {
	h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
		<h1
			{...props}
			className={cn(
				"font-extrabold mt-8 relative scroll-m-20 group font-sans text-white",
				className
			)}
		/>
	),

	h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
		<h2
			{...props}
			className={cn(
				"font-bold mt-8 relative scroll-m-20 group font-sans text-white",
				className
			)}
		/>
	),

	h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
		<h3
			{...props}
			className={cn(
				"font-semibold mt-8 relative scroll-m-20 group text-lg font-sans text-white",
				className
			)}
		/>
	),

	h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
		<h4
			{...props}
			className={cn(
				"font-semibold mt-8 relative scroll-m-20 group text-md font-sans text-white",
				className
			)}
		/>
	),

	p: ({ className, children, ...props }: React.ComponentProps<"p">) => {
		// Pleases TypeScript when passing `components` to <Content />
		const { __hasImageDescendant__ } =
			props as unknown as React.ComponentProps<"p"> & {
				__hasImageDescendant__: boolean;
			};

		if (__hasImageDescendant__) {
			return children;
		}

		return (
			<p
				{...props}
				className={cn("font-clearface [&:not(:first-child)]:mt-6", className)}
			>
				{children}
			</p>
		);
	},

	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => {
		const { __isAnchorLink__ } =
			props as unknown as React.ComponentProps<"a"> & {
				__isAnchorLink__?: boolean;
			};

		if (__isAnchorLink__) {
			return (
				<a
					{...props}
					className={cn(
						"absolute -left-7 w-full opacity-0 text-inherit !text-foreground transition-all group-hover:opacity-100",
						className
					)}
				>
					#
				</a>
			);
		}

		return (
			<a
				{...props}
				target="_blank"
				className={cn(
					"underline font-medium underline-offset-4 hover:text-muted-foreground transition-colors",
					className
				)}
			/>
		);
	},

	img: ({ className, ...other }: React.ComponentProps<"img">) => {
		const props = { ...other };
		if (!props.src) return null;

		const isLocalImage = !props.src.startsWith("http");

		if (!props.width && !props.height && isLocalImage) {
			const basePath = "/pictures";

			if (!props.src.startsWith(basePath) && isLocalImage) {
				props.src = `${basePath}${props.src}`;
			}

			const { width, height } = sizeOf(
				path.join(process.cwd(), "public", props.src)
			);

			props.width = width || 640;
			props.height = height || 640;
		}

		return (
			<figure className="mt-6">
				<picture>
					<Image
						{...props}
						className={cn("w-full h-auto rounded-sm", className)}
						alt={props.alt || "Image"}
						src={props.src}
						width={(props.width as number) || 640}
						height={(props.height as number) || 360}
					/>
				</picture>
				<figcaption className="text-center mt-1 text-md text-muted-foreground font-clearface">
					{props.title}
				</figcaption>
			</figure>
		);
	},

	blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
		<blockquote
			{...props}
			className={cn(
				"mt-6 border-l-2 border-border pl-6 italic text-[90%]",
				className
			)}
		/>
	),

	pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
		<div className="mb-4 mt-6 overflow-auto max-h-[640px] rounded-sm border ">
			<pre
				{...props}
				className={cn(
					"py-2 [&>code]:bg-[unset] [&>code]:p-[unset] [&>code]:font-normal overflow-auto relative",
					className
				)}
			/>
		</div>
	),

	code: ({ className, ...props }: React.ComponentProps<"code">) => (
		<code
			{...props}
			className={cn(
				"relative [&>span[data-line]]:px-4  font-semibold bg-muted px-[0.3rem] py-[0.2rem] rounded font-mono text-sm",
				className
			)}
		/>
	),

	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn("my-6 ml-6 list-['—_']", className)} {...props} />
	),

	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol
			className={cn("my-6 ml-6 font-clearface list-decimal", className)}
			{...props}
		/>
	),

	li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<li className={cn("mt-2 font-clearface", className)} {...props} />
	),
};

export function MDXContent({ source }: { source: string }) {
	const Content = useMDXComponent(source);

	return <Content components={mdxComponents} />;
}
