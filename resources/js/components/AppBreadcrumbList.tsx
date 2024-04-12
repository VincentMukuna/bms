import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@inertiajs/react";
import React, { Fragment } from "react";
import { atom, useAtom } from "jotai";

export type BreadcrumbItem = {
    href: string;
    title: string;
};

export const breadcrumbsAtom = atom<BreadcrumbItem[]>([
    { href: "#", title: "Home" },
]);

export const updateBreadcrumbsAtom = atom(
    null,
    (get, set, newBreadcrumbs: BreadcrumbItem[]) => {
        set(breadcrumbsAtom, newBreadcrumbs);
    },
);
export default function AppBreadcrumbList() {
    const [breadcrumbs] = useAtom(breadcrumbsAtom);
    return (
        <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                    <Fragment key={index}>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={breadcrumb.href}>
                                    {breadcrumb.title}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && (
                            <BreadcrumbSeparator />
                        )}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
