import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

export default function usePageProps<T extends PageProps>(){
    return usePage<T>().props;
}
