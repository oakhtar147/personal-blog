import { MDXRemote as _MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";

import * as Typography from "./typography";

export function MDXRemote({ components, ...props }: MDXRemoteProps) {
	return (
		// @ts-expect-error - React Server Component
		<_MDXRemote
			components={{
				h1: Typography.H1,
				...components,
			}}
			{...props}
		/>
	);
}
