import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {Billboard, PageProps} from '@/types';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ColumnDef,} from "@tanstack/react-table";
import {DataTable} from "@/components/ui/data-table";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {Button} from "@/components/ui/button";
import {Progress} from "@/components/ui/progress";
import {Activity, CreditCard, DollarSign, Users} from "lucide-react";
import {CardsMetric} from "@/components/metric";
import React, {useLayoutEffect} from "react";
import {useAtom} from "jotai/index";
import {updateBreadcrumbsAtom} from "@/components/AppBreadcrumbList";
import useUpdateBreadcrumbs from "@/lib/hooks/useUpdateBreadcrumbs.ts";
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
    useUpdateBreadcrumbs([
        {
            title:"Home",
            href:"dashboard"
        },
    ])
    return (
        <>
            <Head title="Dashboard" />

            <div className="py-4 space-y-6 sm:px-6 lg:px-8">
                <div className={'grid grid-cols-2 lg:grid-cols-4 gap-4'}>
                    <Card className="col-span-2">
                        <CardHeader className="pb-3">
                            <CardTitle>Your Orders</CardTitle>
                            <CardDescription className="max-w-lg text-balance leading-relaxed">
                                Introducing Our Dynamic Orders Dashboard for Seamless
                                Management and Insightful Analysis.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button>Create New Order</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>This Week</CardDescription>
                            <CardTitle className="text-4xl">$1329</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +25% from last week
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Progress value={25} aria-label="25% increase"/>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardDescription>This Month</CardDescription>
                            <CardTitle className="text-3xl">$5,329</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                +10% from last month
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Progress value={12} aria-label="12% increase"/>
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
                            </CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Subscriptions
                            </CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">
                                +180.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card>

                    <CardsMetric className={'col-span-2'}/>
                    <div className={'col-span-2'}>
                        <MapContainer center={[-1.296389,36.821946]} zoom={10} scrollWheelZoom={false} className={'aspect-video rounded z-0'}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                            {billboards.map(b => (
                                <Marker key={b.id} position={[b.latitude, b.longitude]}>
                                    <Popup>
                                        A pretty CSS3 popup. <br/> Easily customizable.
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>

                <div className={'grid gap-4 '}>
                    <Card className={' shadow-sm'}>
                        <CardHeader>
                            <CardTitle>Billboards</CardTitle>
                            <CardDescription>View and Manage Billboards</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <DataTable columns={columns} data={billboards.slice(0, 5)}/>
                        </CardContent>

                    </Card>


                </div>
            </div>


        </>);
}

