import { ImageResponse } from "next/og";

export function GET(request: Request) {
	let url = new URL(request.url);
	let title = url.searchParams.get("title") || "Osama's Blog";

	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100%",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "hsl(182 21.13% 27.84%)",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						justifyContent: "space-between",
						padding: "2rem",
					}}
				>
					<h2
						style={{
							fontSize: "2rem",
							fontWeight: "bold",
							color: "white",
							textAlign: "left",
						}}
					>
						{title}
					</h2>
				</div>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
