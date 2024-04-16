"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavLink({
  href,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link>) {
  const pathname = usePathname()
  const active = pathname.includes(href.toString())

  return (
    <Link
      {...props}
      href={href}
      data-active={active}
      className={cn(
        "hover:bg-muted data-[active=true]:bg-muted rounded-md px-2 font-extrabold tracking-normal text-white transition-all",
        className
      )}
    >
      {children}
    </Link>
  )
}
