import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Notifications() {
    return (
        <Sheet>
            <SheetTrigger asChild={true}>
                <Button variant={"secondary"} size={"icon"}>
                    <Bell className={"h-4 w-4"} />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className={"mb-4"}>
                    <SheetTitle>Notifications</SheetTitle>
                    <SheetDescription>
                        Your notifications will appear here! You can mark them
                        as read or clear them
                    </SheetDescription>
                    <div className={"grid gap-3 self-end sm:grid-cols-2 "}>
                        <Button variant={"ghost"}>Mark All as Read</Button>
                        <Button variant={"link"} className={"text-destructive"}>
                            Clear All
                        </Button>
                    </div>
                </SheetHeader>
                <Card className={"rounded-md"}>
                    <CardHeader className={"p-3"}>
                        <CardTitle>New Message</CardTitle>
                        <CardDescription>Alonso texted you!</CardDescription>
                    </CardHeader>
                </Card>
            </SheetContent>
        </Sheet>
    );
}
