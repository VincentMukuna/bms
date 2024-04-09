import {useTheme} from "@/components/theme-provider";
import {Button} from "@/components/ui/button";
import {MoonStar, MoonStarIcon, Sun, Sunrise} from "lucide-react";

export default function ColorModeToggle(){
    const {theme, setTheme} = useTheme()
    return (
        <Button variant={'secondary'} size={'icon'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className={'w-4 h-4'} /> : <MoonStar className={'w-4 h-4'} />}
        </Button>
    )
}
