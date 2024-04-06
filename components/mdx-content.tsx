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
			}}
		/>
	);
}
