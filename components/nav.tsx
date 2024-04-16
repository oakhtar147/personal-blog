import Image from "next/image"
import Link from "next/link"
import { NavLink } from "./nav-link"

export function Nav() {
  return (
    <nav className="text-md my-12 flex items-center justify-between tracking-tighter">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/scribble.svg"
          priority
          alt="Scribble"
          width={60}
          height={60}
        />
        <h1 className="font-extrabold text-white">OSAMA</h1>
      </Link>
      <NavLink
        className="hover:bg-muted data-[active=true]:bg-muted rounded-md px-2 font-extrabold tracking-normal text-white transition-all"
        href="/blog"
      >
        Blog
      </NavLink>
    </nav>
  )
}
