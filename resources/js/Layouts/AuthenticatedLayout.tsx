import {
    Home,
    LineChart,
    Package,
    Package2,
    Search,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "@inertiajs/react";
import MobileNav from "@/components/mobile-nav";
import React, { PropsWithChildren, ReactNode, useEffect } from "react";
import { PageProps, User } from "@/types";
import Navbar from "@/components/navbar";
import AppBreadcrumbList from "@/components/AppBreadcrumbList";
import ColorModeToggle from "@/components/color-mode-toggle";
import usePathname from "@/lib/hooks/usePathname";
import UserProfileButton from "@/components/userProfileButton";
import Notifications from "@/components/Notifications";

export interface AuthenticatedLayoutProps {
    header?: React.ReactNode;
    user?: User;
    children: ReactNode;
}

export default function AuthenticatedLayout({
    children,
    user,
}: AuthenticatedLayoutProps) {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40  ">
            <Navbar />
            <div className="flex grow flex-col bg-gray-50 dark:bg-background sm:gap-4 sm:pl-[180px]">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background px-4 py-3 sm:static sm:h-auto sm:border-0 sm:bg-muted/40 sm:px-6">
                    <MobileNav />
                    <AppBreadcrumbList />
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        />
                    </div>
                    <ColorModeToggle />
                    <Notifications />
                    <UserProfileButton />
                </header>
                <main className={"grow px-2 py-4 sm:gap-4 lg:px-8"}>
                    {children}
                </main>
            </div>
        </div>
    );
}
