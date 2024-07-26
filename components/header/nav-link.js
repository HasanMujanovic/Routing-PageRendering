"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ link, children }) {
  const path = usePathname();

  return (
    <Link href={link} className={path.startsWith(link) ? "active" : undefined}>
      {children}
    </Link>
  );
}
