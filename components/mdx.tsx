import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
	return (
		<h1
			{...props}
			className={cn("font-extrabold font-sans text-white", className)}
		/>
	);
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
	return (
		<h2
			{...props}
			className={cn("font-bold font-sans text-white", className)}
		/>
	);
}

export function H3({ className, ...props }: React.ComponentProps<"h3">) {
	return (
		<h3
			{...props}
			className={cn("font-semibold text-lg font-sans text-white", className)}
		/>
	);
}

const paraVariants = cva("[&:not(:first-child)]:mt-6", {
	variants: {
		variant: {
			default: "",
			description: "text-md",
		},
		font: {
			sans: "font-sans",
			serif: "font-serif",
			family: "font-family",
		},
	},
	defaultVariants: {
		variant: "default",
		font: "family",
	},
});

type ParaProps = React.ComponentProps<"p"> & VariantProps<typeof paraVariants>;

export function P({ className, variant, font, ...props }: ParaProps) {
	return (
		<p {...props} className={paraVariants({ variant, font, className })} />
	);
}

export function A({
	className,
	...props
}: React.HTMLAttributes<HTMLAnchorElement>) {
	return (
		<a
			className={cn("font-medium underline underline-offset-4", className)}
			{...props}
		/>
	);
}

export function Blockquote({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<blockquote
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
			{...props}
		/>
	);
}
