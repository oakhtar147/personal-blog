export function H1(props: React.ComponentProps<"h1">) {
	return (
		<h1
			{...props}
			className="text-[50%] font-extrabold uppercase font-sans text-white"
		/>
	);
}
