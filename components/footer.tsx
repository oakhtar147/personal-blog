import { formatBlogDate } from "@/lib/utils";
import AtEmail from "@/public/at-email.svg";
import GitHub from "@/public/github.svg";
import LinkedIn from "@/public/linkedin.svg";
import X from "@/public/x.svg";
import { IconLink } from "./icon-link";

export function Footer() {
	return (
		<footer className="mt-36 mb-8 md:mb-12 flex flex-col md:flex-row gap-y-2 justify-between items-center">
			<small className="text-xs font-bold">
				I own all <b className="text-white">opinions</b> shared. Last updated{" "}
				<b className="text-white">{formatBlogDate(new Date())}</b>.
			</small>
			<div className="flex gap-1">
				<IconLink
					icon={X}
					target="_blank"
					href="https://twitter.com/_osamaakhtar"
				/>
				<IconLink
					icon={GitHub}
					target="_blank"
					href="https://github.com/oakhtar147"
				/>
				<IconLink
					target="_blank"
					icon={LinkedIn}
					href="https://www.linkedin.com/in/osamakhtar/"
				/>
				<IconLink
					icon={AtEmail}
					target="_blank"
					href="mailto:osamaakhtar15@gmail.com"
				/>
			</div>
		</footer>
	);
}
