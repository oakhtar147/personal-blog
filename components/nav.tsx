import Image from "next/image";
import Link from "next/link";
import { NavLink } from "./nav-link";

export function Nav() {
	return (
		<nav className="flex my-12 text-md tracking-tighter justify-between items-center">
			<Link href="/" className="flex gap-1 items-center">
				<Image
					src="/scribble.svg"
					priority
					alt="scribble"
					width={50}
					height={50}
				/>
				<h1 className="font-extrabold text-white">OSAMA</h1>
			</Link>
			<NavLink
				className="px-2 hover:bg-muted rounded-md font-extrabold text-white tracking-normal transition-all data-[active=true]:bg-muted"
				href="/blog"
			>
				Blog
			</NavLink>
		</nav>
	);
}
