import type { Config } from "tailwindcss";

const config = {
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				family: "family",
			},
			fontSize: {
				md: "16px",
				clamped: "clamp(1.25rem, 2.225vw, 1.75rem)",
			},
			letterSpacing: {
				tightest: "-0.0015em",
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				muted: "hsl(var(--muted))",

				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
} satisfies Config;

export default config;
