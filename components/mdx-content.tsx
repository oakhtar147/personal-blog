import { cn } from "@/lib/utils"
import sizeOf from "image-size"
import { useMDXComponent } from "next-contentlayer/hooks"
import Image from "next/image"
import path from "path"
import React from "react"

export const mdxComponents = {
  h1: ({ className, ...props }: React.ComponentProps<"h1">) => (
    <h1
      {...props}
      className={cn(
        "group relative mt-8 scroll-m-8 font-sans font-extrabold text-white",
        className
      )}
    />
  ),

  h2: ({ className, ...props }: React.ComponentProps<"h2">) => (
    <h2
      {...props}
      className={cn(
        "group relative mt-8 scroll-m-8 font-sans font-bold text-white",
        className
      )}
    />
  ),

  h3: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      {...props}
      className={cn(
        "group relative mt-8 scroll-m-8 font-sans text-lg font-semibold text-white",
        className
      )}
    />
  ),

  h4: ({ className, ...props }: React.ComponentProps<"h4">) => (
    <h4
      {...props}
      className={cn(
        "text-md group relative mt-8 scroll-m-8 font-sans font-semibold text-white",
        className
      )}
    />
  ),

  p: ({ className, children, ...props }: React.ComponentProps<"p">) => {
    // Pleases TypeScript when passing `components` to <Content />
    const { __hasImageDescendant__ } =
      props as unknown as React.ComponentProps<"p"> & {
        __hasImageDescendant__: boolean
      }

    if (__hasImageDescendant__) {
      return children
    }

    return (
      <p
        {...props}
        className={cn("font-clearface [&:not(:first-child)]:mt-6", className)}
      >
        {children}
      </p>
    )
  },

  a: ({ className, ...rest }: React.HTMLAttributes<HTMLAnchorElement>) => {
    const { __isAnchorLink__, ...props } =
      rest as unknown as React.ComponentProps<"a"> & {
        __isAnchorLink__?: boolean
      }

    if (__isAnchorLink__) {
      return (
        <a
          {...props}
          className={cn(
            "!text-foreground absolute left-[-20px] w-full text-inherit opacity-0 transition-all group-hover:opacity-100 md:-left-7",
            className
          )}
        >
          #
        </a>
      )
    }

    return (
      <a
        {...props}
        target="_blank"
        className={cn(
          "hover:text-muted-foreground font-medium underline underline-offset-4 transition-colors",
          className
        )}
      />
    )
  },

  img: ({ className, ...other }: React.ComponentProps<"img">) => {
    const props = { ...other }
    if (!props.src) return null

    const isLocalImage = !props.src.startsWith("http")

    if (!props.width && !props.height && isLocalImage) {
      const basePath = "/pictures"

      if (!props.src.startsWith(basePath) && isLocalImage) {
        props.src = `${basePath}${props.src}`
      }

      const { width, height } = sizeOf(
        path.join(process.cwd(), "public", props.src)
      )

      props.width = width || 640
      props.height = height || 640
    }

    return (
      <figure className="mt-6">
        <picture>
          <Image
            {...props}
            className={cn("h-auto w-full rounded-sm", className)}
            alt={props.alt || "Image"}
            src={props.src}
            width={(props.width as number) || 640}
            height={(props.height as number) || 360}
          />
        </picture>
        <figcaption className="text-md text-muted-foreground font-clearface mt-1 text-center">
          {props.title}
        </figcaption>
      </figure>
    )
  },

  blockquote: ({ className, ...props }: React.ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className={cn(
        "border-border mt-6 border-l-2 pl-6 text-[90%] italic",
        className
      )}
    />
  ),

  pre: ({ className, ...props }: React.ComponentProps<"pre">) => (
    <div className="mb-4 mt-6 max-h-[640px] overflow-auto rounded-sm border ">
      <pre
        {...props}
        className={cn(
          "relative overflow-auto py-2 [&>code]:bg-[unset] [&>code]:p-[unset] [&>code]:font-normal",
          className
        )}
      />
    </div>
  ),

  code: ({ className, ...props }: React.ComponentProps<"code">) => (
    <code
      {...props}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold [&>span[data-line]]:px-4",
        className
      )}
    />
  ),

  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("my-6 ml-6 list-['—_']", className)} {...props} />
  ),

  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={cn("font-clearface my-6 ml-6 list-decimal", className)}
      {...props}
    />
  ),

  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("font-clearface mt-2", className)} {...props} />
  ),
}

export function MDXContent({ source }: { source: string }) {
  const Content = useMDXComponent(source)

  return <Content components={mdxComponents} />
}
