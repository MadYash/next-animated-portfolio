"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = ({link,inx}) => {
    const pathName = usePathname()
  return (
    <Link href={link.url} key={inx} className={`rounded ${pathName === link.url && "bg-black text-white"}`}>{link.title}</Link>
)
}

export default NavLinks