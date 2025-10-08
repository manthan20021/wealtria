"use client"
import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { adminSidebarManu } from '@/lib/AdminSidebarManu'



const AppSidebar = () => {
  return (
     <Sidebar>
      <SidebarHeader>
        <h1>LOGO</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {adminSidebarManu.map((menu, index) => ( 
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
  )
}

export default AppSidebar
