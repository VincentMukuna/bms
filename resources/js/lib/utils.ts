import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(name :string){
    return name.split(' ').map(x=>x.at(0)).slice(0,2).join('').toUpperCase();
}
