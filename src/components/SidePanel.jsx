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
} from "./ui/sidebar";

const SidePanel = () => {
  const dispatch = useDispatch();

  // const navLinks = [
  //   { to: "/dashboard", label: "📊 Dashboard" },
  //   { to: "/users", label: "👤 Users" },
  // ];

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
    <Sidebar>
      <SidebarHeader className="flex items-center ">
        <div className="flex items-center gap-2">
          <img src="/images/logo.gif" alt="Logo" className="h-16 w-auto" />
        </div>
      </SidebarHeader>

      <SidebarContent className={"px-4"}>
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

      <SidebarFooter className={"px-4"}>
        <Button
          variant="destructive"
          className="w-full justify-start"
          onClick={() => dispatch(logout())}
        >
          🚪 Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidePanel;
