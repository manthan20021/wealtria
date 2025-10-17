// import { Button } from '@/components/ui/button'
import React from 'react'
// import { NavbarDemo } from './NavbarDemo'
// import { ModeToggle } from '@/components/ModeToggle'

import { NavbarDemo } from "@/components/Application/websit/NavbarDemo"
import { ModeToggle } from "@/components/ModeToggle"
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'


const Header = () => {
  return (
    <div className='w-screen h-20 hidden sticky z-50 top-0 sm:flex items-center justify-between lg:px-[98px] md:px-[20px] '>

      <div className='h-full flex justify-between items-center'>
        <Image
       alt="logoimg"
        width={40}
        height={40}
      src="/logo.png"
      />
      <h1 className='font-semibold text-2xl ml-1'>MultipleGains</h1>
      </div>
      <NavbarDemo/>
      <ModeToggle/>
      <Link href="/website/contact-form">
      <Button className="ml-4 bg-[#6F39C5] text-white">Contact</Button>
      </Link>
    </div>
  )
}

export default Header
