import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import React from "react";
import usePageProps from "@/lib/hooks/usePageProps";

export default function UserProfileButton() {
    const { auth } = usePageProps();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className={"h-9 w-9 rounded-md"}>
                    <AvatarImage
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=36&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt={`${auth.user.name}`}
                        className={"object-cover"}
                    />
                    <AvatarFallback>
                        {getInitials(auth.user.name)}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        className={"h-full w-full "}
                        href={route("profile.edit")}
                    >
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link
                        className={"h-full w-full "}
                        as={"button"}
                        href={route("logout")}
                        method={"post"}
                    >
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
