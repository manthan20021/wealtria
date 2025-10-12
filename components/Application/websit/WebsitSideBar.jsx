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




const WebsitSideBar = () => {
  return (
     <aside className="sm:hidden block">
      <aside className='p-2 rounded-md hover:bg-gray-200 fixed top-2 left-2 z-50'>
<SidebarTrigger/>
      </aside>
     <Sidebar>
      <SidebarHeader>
        <h1>LOGO</h1>
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