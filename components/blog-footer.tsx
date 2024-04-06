import { formatBlogDate } from "@/lib/utils";
import Image from "next/image";
import { mdxComponents } from "./mdx-content";

export function BlogFooter({ dateWritten }: { dateWritten: Date }) {
	return (
		<section className="text-lg mt-8">
			<Image src="/signature.svg" width={128} height={128} alt="Signature" />
			<dl className="mt-2">
				<dt className="font-clearface font-bold">Osama Akhtar</dt>
				<dd className="font-clearface">Software Engineer</dd>
			</dl>
			<mdxComponents.p className="!mt-0">
				Written on {formatBlogDate(dateWritten)}
			</mdxComponents.p>
		</section>
	);
}
