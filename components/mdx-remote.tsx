import { MDXRemote as _MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";

import * as Typography from "./typography";

export function MDXRemote({ components, ...props }: MDXRemoteProps) {
	return (
		<_MDXRemote
			components={{
				h1: Typography.H1,
				...components,
			}}
			{...props}
		/>
	);
}
