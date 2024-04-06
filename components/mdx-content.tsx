import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";

export function MDXContent({ source }: { source: string }) {
	const Content = useMDXComponent(source);

	return (
		<Content
			components={{
				h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
					<h1
						{...props}
						className={cn("font-extrabold font-sans text-white", className)}
					/>
				),

				h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
					<h2
						{...props}
						className={cn("font-bold font-sans text-white", className)}
					/>
				),

				h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
					<h3
						{...props}
						className={cn(
							"font-semibold text-lg font-sans text-white",
							className
						)}
					/>
				),

				p: ({ className, ...props }: React.ComponentProps<"p">) => (
					<p
						{...props}
						className={cn("font-family [&:not(:first-child)]:mt-6", className)}
					/>
				),

				a: ({
					className,
					...props
				}: React.HTMLAttributes<HTMLAnchorElement>) => (
					<a
						{...props}
						className={cn(
							"underline font-medium underline-offset-4",
							className
						)}
					/>
				),

				blockquote: ({
					className,
					...props
				}: React.ComponentProps<"blockquote">) => (
					<blockquote
						{...props}
						className={cn(
							"mt-6 border-l-2 border-border pl-6 italic text-[90%]",
							className
						)}
					/>
				),

				pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
					<div className="mb-4 mt-6 overflow-auto max-h-[640px] rounded-lg border ">
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

				ol: ({
					className,
					...props
				}: React.HTMLAttributes<HTMLOListElement>) => (
					<ol
						className={cn("my-6 ml-6 font-family list-decimal", className)}
						{...props}
					/>
				),

				li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
					<li className={cn("mt-2 font-family", className)} {...props} />
				),
			}}
		/>
	);
}
