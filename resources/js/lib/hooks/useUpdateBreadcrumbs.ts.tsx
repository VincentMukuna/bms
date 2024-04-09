import {BreadcrumbItem, updateBreadcrumbsAtom} from "@/components/AppBreadcrumbList";
import {useAtom} from "jotai/index";
import {useLayoutEffect} from "react";
import {router, usePage,} from "@inertiajs/react";

export default function useUpdateBreadcrumbs(breadcrumbs: BreadcrumbItem[] ){
    const [_, updateBreadcrumbs] = useAtom(updateBreadcrumbsAtom);
    const{url} = usePage();

    useLayoutEffect(() => {
        updateBreadcrumbs(breadcrumbs);
    }, [url]);
}
