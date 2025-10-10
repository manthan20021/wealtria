import React from 'react'
import { ModeToggle } from "@/components/ModeToggle";
import { NavbarDemo } from "@/components/NavbarDemo";
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <div className='w-full  h-20 hidden sticky top-0 md:flex items-center justify-between px-2.5 '>

      <Button className="bg-[#B33BEF]">LOGO</Button>
      <NavbarDemo/>
      <ModeToggle/>
      <Button className="ml-4 ">Account</Button>
    </div>
  )
}

export default Header
