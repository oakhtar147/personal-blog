import { cn, formatBlogDate } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
	return (
		<h1
			{...props}
			className={cn(
				"text-[50%] font-extrabold font-sans text-white",
				className
			)}
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
	},
	defaultVariants: {
		variant: "default",
	},
});

type ParaProps = React.ComponentProps<"p"> & VariantProps<typeof paraVariants>;

export function P({ className, variant, ...props }: ParaProps) {
	return <p {...props} className={paraVariants({ variant, className })} />;
}

type TimeProps = Omit<React.ComponentProps<"time">, "children"> & {
	date: Date | string;
};

export function Time({ className, date, ...props }: TimeProps) {
	return (
		<time {...props} className={cn("text-xs font-sans uppercase", className)}>
			{formatBlogDate(date)}
		</time>
	);
}
