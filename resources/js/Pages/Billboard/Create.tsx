import useUpdateBreadcrumbs from "@/lib/hooks/useUpdateBreadcrumbs.ts";
import CreateBillBoardsForm from "@/Pages/Billboard/Partials/CreateBillboardsForm";
import { BillboardSize, BillboardType, PageProps } from "@/types";

export interface CreateBillboardPageProps extends PageProps {
    billboard_sizes: BillboardSize[];
    billboard_types: BillboardType[];
}
export default function CreateBillboardPage({}: CreateBillboardPageProps) {
    useUpdateBreadcrumbs([
        {
            title: "Home",
            href: "dashboard",
        },
        {
            title: "Billboards",
            href: route("billboard.index"),
        },
        {
            title: "Create",
            href: route("billboard.create"),
        },
    ]);
    return (
        <>
            <CreateBillBoardsForm />
        </>
    );
}
