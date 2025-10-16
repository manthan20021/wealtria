// import { Button } from '@/components/ui/button'
import React from 'react'
// import { NavbarDemo } from './NavbarDemo'
// import { ModeToggle } from '@/components/ModeToggle'

import { NavbarDemo } from "@/components/Application/websit/NavbarDemo"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const Header = () => {
  return (
    <div className='w-screen  h-20 hidden sticky z-50 top-0 sm:flex items-center justify-between lg:px-[98px] md:px-[20px] '>

      <Button className="bg-[#6F39C5]">LOGO</Button>
      <NavbarDemo/>
      <ModeToggle/>
      <Link href="/website/contact-form">
      <Button className="ml-4 bg-[#6F39C5] text-white">Contact</Button>
      </Link>
    </div>
  )
}

export default Header
