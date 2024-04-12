import { Billboard, PageProps } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui/data-table";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useAtom } from "jotai";
import { updateBreadcrumbsAtom } from "@/components/AppBreadcrumbList";
import useUpdateBreadcrumbs from "@/lib/hooks/useUpdateBreadcrumbs.ts";
import SelectedBillboardDetails from "@/Pages/Billboard/Partials/SelectedBillboardDetails";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, ArrowUpDown, MoreVertical, Plus } from "lucide-react";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
interface BillboardPageProps extends PageProps {
    billboards: Billboard[];
}

const columns: ColumnDef<Billboard>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "image_url",
        header: "Image",
        cell: ({ getValue }) => (
            <img
                src={getValue() as string}
                alt="billboard"
                className="aspect-square w-8 rounded-lg object-cover"
            />
        ),
    },
    {
        accessorKey: "daily_rate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="ml-auto"
                >
                    Daily Rate
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("daily_rate"));
            const formatted = new Intl.NumberFormat("en-KE", {
                style: "currency",
                currency: "KES",
                maximumFractionDigits: 0,
            }).format(amount);

            return <div className="font-medium">{formatted}</div>;
        },
    },
    {
        accessorKey: "size",
        header: "Size",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">More</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Archive</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

export default function BillboardsPage({
    auth,
    billboards,
}: BillboardPageProps) {
    useUpdateBreadcrumbs([
        {
            title: "Home",
            href: "dashboard",
        },
        {
            title: "Billboards",
            href: route("billboard.index"),
        },
    ]);
    return (
        <div className={"grid grid-cols-1 items-start gap-4 lg:grid-cols-12"}>
            <div className="col-span-8 grid gap-2">
                <Card className="">
                    <CardHeader className="pb-3">
                        <CardTitle>Billboards</CardTitle>
                        <CardDescription className="max-w-lg text-balance leading-relaxed">
                            Billboard space for advertising your products and
                            services.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <Link
                            href={route("billboard.create")}
                            className={cn(
                                buttonVariants(),
                                "inline-flex gap-2",
                            )}
                        >
                            <Plus className={"h-4 w-4"} />
                            Create New Billboard
                        </Link>
                    </CardFooter>
                </Card>
                <Card className={" shadow-sm "}>
                    <CardHeader>
                        <CardTitle>Billboards</CardTitle>
                        <CardDescription>
                            View and Manage Billboards
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <DataTable
                            columns={columns}
                            data={billboards.slice(0, 10)}
                        />
                    </CardContent>
                </Card>
            </div>
            <div className={"col-span-4"}>
                <SelectedBillboardDetails />
            </div>
        </div>
    );
}
