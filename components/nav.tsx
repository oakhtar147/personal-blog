import { cn } from "@/lib/utils";
import scribble from "@/public/scribble.svg";
import Image from "next/image";
import Link from "next/link";

export function Nav() {
	return (
		<nav className="flex my-12 text-md tracking-tighter justify-between items-center">
			<Link href="/" className="flex gap-1 items-center">
				<Image src={scribble} priority alt="scribble" width={50} height={50} />
				<h1 className={cn("font-extrabold text-white")}>OSAMA</h1>
			</Link>
			<Link className="font-sans" href="/blog">
				Blog
			</Link>
		</nav>
	);
}
