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
		<h1
			{...props}
			className={cn("font-bold font-sans text-white", className)}
		/>
	);
}

export function H3({ className, ...props }: React.ComponentProps<"h3">) {
	return (
		<h1
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

export function Time({
	className,
	children,
	...props
}: React.ComponentProps<"time">) {
	return (
		<time
			{...props}
			className={cn("text-xs font-sans uppercase font-semibold", className)}
		>
			{children}
		</time>
	);
}
