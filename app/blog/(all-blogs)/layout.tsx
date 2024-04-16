import "@/app/globals.css"
import { Footer } from "@/components/footer"
import { Nav } from "@/components/nav"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import localFont from "next/font/local"

const clearFaceFont = localFont({
  variable: "--font-clearface",
  src: [
    {
      path: "../../../fonts/clearface-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../fonts/clearface-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../fonts/clearface-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../fonts/clearface-bold-italic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
})

export const metadata: Metadata = {
  title: "Blogs",
  description: "Blogs written by Osama Akhtar",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="emerald flex min-h-full flex-col">
      <body
        style={{ textRendering: "optimizeLegibility" }}
        className={cn(
          "text-clamped mx-auto flex w-[min(100%,720px)] grow flex-col px-[1.5em] font-sans antialiased",
          clearFaceFont.variable
        )}
      >
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
