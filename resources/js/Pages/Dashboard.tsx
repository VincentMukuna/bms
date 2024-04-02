import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {Billboard, PageProps} from '@/types';
import {Card} from "@/components/ui/card";
import {ColumnDef, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {DataTable} from "@/components/ui/data-table";
interface DashboardProps extends PageProps {
    billboards: Billboard[];
}

const columns:ColumnDef<Billboard>[]=[
    {
        accessorKey:'id',
        header:'ID',
    },
    {
        accessorKey:'image_url',
        header:'Image',
        cell:({getValue,})=>(
            <img src={getValue() as string} alt="billboard" className="aspect-square w-8 object-cover rounded-lg"/>
        ),

    },
    {
        accessorKey:'daily_rate',
        header: () => <div className="text-right">Daily Rate</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("daily_rate"))
            const formatted = new Intl.NumberFormat("en-KE", {
                style: "currency",
                currency: "KES",
                maximumFractionDigits: 0,
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        accessorKey:'size',
        header:'Size',
    },
    {
        accessorKey:'type',
        header:'Type',

    },
]




export default function Dashboard({ auth, billboards }: DashboardProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-4 space-y-6 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto ">
                    <Card>
                        <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
                    </Card>
                </div>
                <div className={'grid md:grid-cols-2 '}>
                    <div className={' shadow-sm'}>
                        <DataTable columns={columns} data={billboards} />
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>);
}

// Dashboard.layout = AuthenticatedLayout;
