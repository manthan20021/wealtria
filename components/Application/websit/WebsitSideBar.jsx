"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { WebsitSidebarManuData } from '@/lib/WebsitSidebarManuData'
import { ModeToggle } from '@/components/ModeToggle'
import Image from 'next/image'




const WebsitSideBar = () => {
  return (
     <aside className="sm:hidden block">
      <aside className='p-2 rounded-md hover:bg-gray-200 fixed top-2 left-2 z-50'>
<SidebarTrigger/>
      </aside>
     <Sidebar>
         <SidebarHeader className='w-full border-2 flex flex-row items-center justify-between '>
        <div className='h-full flex justify-between items-center'>
                <Image
               alt="logoimg"
                width={40}
                height={40}
              src="/logo.png"
              />
              <div className='w-full flex flex-col items-start justify-center'>
              <h1 className='font-semibold text-md'>MultipleGains</h1>
              <p className='text-[9px]'>Think Big. Invest Smart. Gain Multiple.</p>
              </div>
              </div>
         <ModeToggle/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {WebsitSidebarManuData.map((menu, index) => ( 
          <SidebarMenuItem key={index}>
           <SidebarMenuButton asChild>
             <a href={menu.url}>
            <menu.icon/>
            {menu.title}
            </a>
           </SidebarMenuButton>
          </SidebarMenuItem>
          
        ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
    </aside>
  )
}

export default WebsitSideBar