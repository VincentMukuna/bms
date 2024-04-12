import { Link, usePage } from "@inertiajs/react";
import {
    Home,
    LineChart,
    Package,
    Package2,
    SeparatorHorizontal,
    Settings,
    ShoppingCart,
    Users2,
    WallpaperIcon,
} from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import usePageProps from "@/lib/hooks/usePageProps";
import { AuthenticatedLayoutProps } from "@/Layouts/AuthenticatedLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import navbarLinks from "@/data/navbarLinks";

export default function Navbar() {
    return (
        <aside className="fixed hidden h-screen w-[180px] flex-col border-r bg-background px-2 sm:flex">
            <nav className="flex flex-col gap-4  sm:py-5">
                <Link
                    href="#"
                    className="group flex shrink-0 items-center justify-center gap-2 rounded-full  text-lg font-semibold text-primary md:h-8 "
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="">AdvertEase</span>
                </Link>
                <Separator />
                {navbarLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className="flex items-center gap-4 rounded-lg px-4 text-muted-foreground transition-colors hover:text-foreground md:h-8"
                    >
                        <link.icon className="h-5 w-5" />
                        <span className="">{link.title}</span>
                    </Link>
                ))}
            </nav>

            <nav className={"mb-8  mt-auto  flex flex-col gap-4 self-stretch"}>
                <Link
                    href="#"
                    className="flex items-center gap-4 rounded-lg px-4 text-muted-foreground transition-colors hover:text-foreground md:h-8"
                >
                    <Settings className="h-5 w-5" />
                    <span className="">Settings</span>
                </Link>
            </nav>
        </aside>
    );
}
