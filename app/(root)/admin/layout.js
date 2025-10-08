import AppSidebar from "@/components/Application/admin/AppSidebar";
import { SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";

export default function Layout({children}){
    return(
        <SidebarProvider>
            <AppSidebar/>
            <SidebarTrigger/>
        <main>{children}</main>
        </SidebarProvider>
    )
}