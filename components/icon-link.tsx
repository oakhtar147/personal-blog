import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type IconLinkProps = Omit<React.ComponentProps<typeof Link>, "children"> & {
	icon: string;
};

export function IconLink({ className, icon, ...props }: IconLinkProps) {
	return (
		<Link
			{...props}
			className={cn(
				"p-2 rounded-full hover:bg-muted transition-all",
				className
			)}
		>
			<Image src={icon} alt="icon" width={18} height={18} priority />
		</Link>
	);
}
