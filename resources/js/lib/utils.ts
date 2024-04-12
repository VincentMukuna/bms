import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
    return name
        .split(" ")
        .map((x) => x.at(0))
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

//function to remove underscores from slug and make it title case
export function slugToReadable(slug: string) {
    // Split the slug by underscores
    let words = slug.split("_");

    // Capitalize the first letter of each word and join them with a space
    return words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
