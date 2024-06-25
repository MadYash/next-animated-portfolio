"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Inter,Roboto,Roboto_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})
const NavLinks = ({link,inx}) => {
    const pathName = usePathname()
  return (
    <Link href={link.url} key={inx} className={` ${pathName === link.url && `relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-100 ${roboto_mono.className} font-sans font-bold`} relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center `}>{link.title}</Link>
)
}

export default NavLinks