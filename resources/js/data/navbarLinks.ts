import { Home, WallpaperIcon } from "lucide-react";

const navbarLinks = [
    {
        title: "Dashboard",
        href: route("dashboard"),
        icon: Home,
    },
    {
        title: "Billboards",
        href: route("billboard.index"),
        icon: WallpaperIcon,
    },
];

export default navbarLinks;
