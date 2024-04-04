import { cn } from "@/lib/utils";
import scribble from "@/public/scribble.svg";
import Image from "next/image";

export function Nav() {
	return (
		<nav className="flex my-12 justify-between">
			<div className="flex gap-1 items-center">
				<Image src={scribble} alt="scribble" width={50} height={50} />
				<h1
					className={cn(
						"text-[50%] font-extrabold uppercase font-sans text-white"
					)}
				>
					Osama
				</h1>
			</div>
		</nav>
	);
}
