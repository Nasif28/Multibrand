import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { NavLink } from "react-router";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Home,
  Inbox,
  LayoutDashboardIcon,
  LogOut,
  Search,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";

const SidePanel = () => {
  const dispatch = useDispatch();
const { state } = useSidebar();
const collapsed = state === "collapsed";
console.log("Sidebar collapsed:", collapsed);


  const items = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Users",
      url: "/Users",
      icon: Users,
    },
  ];


  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex items-center justify-center h-20 transition-all duration-300">
     <img
  src={collapsed === true ? "/fabicon.png" : "/images/logo.gif"}
  alt="Logo"
  className={(collapsed === true ? "h-6 w-6" : "h-16 w-auto")}
/>


      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-4">Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-bold">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <Button
          variant="destructive"
          className="w-full justify-start"
          onClick={() => dispatch(logout())}
        >
          <LogOut /> Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidePanel;
