import { useMDXComponent } from "next-contentlayer/hooks";
import { H1, H2, H3, P, Time } from "./typography";

export function MDXContent({ source }: { source: string }) {
	const Content = useMDXComponent(source);
	console.log({ Content });

	return (
		<Content
			components={{
				h1: H1,
				h2: H2,
				h3: H3,
				p: P,
				time: Time,
			}}
		/>
	);
}
