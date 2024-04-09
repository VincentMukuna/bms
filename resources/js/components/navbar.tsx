import {Link, usePage} from "@inertiajs/react";
import {
    Home,
    LineChart,
    Package,
    Package2,
    SeparatorHorizontal,
    Settings,
    ShoppingCart,
    Users2, WallpaperIcon
} from "lucide-react";
import React from "react";
import {Separator} from "@/components/ui/separator";
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import usePageProps from "@/lib/hooks/usePageProps";
import {AuthenticatedLayoutProps} from "@/Layouts/AuthenticatedLayout";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {getInitials} from "@/lib/utils";

export default function Navbar(){
    const{auth} = usePageProps<AuthenticatedLayoutProps>();
    const navbarLinks = [
        {
            title: "Dashboard",
            href: "dashboard",
            icon: Home,
        },
        {
            title: 'Billboards',
            href: route('billboard.index'),
            icon: WallpaperIcon,
        }
    ]
    return (
        <aside className="hidden flex-col border-r bg-background sm:flex w-[180px] fixed h-screen px-2">
            <nav className="flex flex-col gap-4  sm:py-5">
                <Link
                    href="#"
                    className="group flex shrink-0 items-center justify-center gap-2 rounded-full  text-lg font-semibold text-primary md:h-8 "
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110"/>
                    <span className="">AdvertEase</span>
                </Link>
                <Separator />
                {navbarLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="flex items-center px-4 gap-4 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8"
                            >
                                <link.icon className="h-5 w-5"/>
                                <span className="">{link.title}</span>
                            </Link>
                    ))}

            </nav>

            <nav className={'mt-auto  mb-4  self-stretch flex flex-col gap-4'}>
                <Separator />
                <Link
                    href="#"
                    className="flex gap-4 px-4 items-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 mt-3"
                >
                    <Settings className="h-5 w-5"/>
                    <span className="">Settings</span>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className=" flex gap-3 px-2 h-auto py-2"
                            size={'lg'}
                        >
                            <Avatar>
                                <AvatarImage
                                    src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=36&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                    alt={`${auth.user.name}`}
                                    className={'object-cover'}

                                />
                                <AvatarFallback>{getInitials(auth.user.name)}</AvatarFallback>
                            </Avatar>

                            {auth.user.name}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" >
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem  >
                            <Link className={"w-full h-full "} href={route('profile.edit')}>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild  >
                            <Link className={"w-full h-full "}  as={'button'} href={route('logout')} method={'post'}>Logout</Link>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </nav>
        </aside>

    )
}
