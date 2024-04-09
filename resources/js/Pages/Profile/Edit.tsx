import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import useUpdateBreadcrumbs from "@/lib/hooks/useUpdateBreadcrumbs.ts";

export default function Edit({ auth, mustVerifyEmail, status }: PageProps<{ mustVerifyEmail: boolean, status?: string }>) {
    useUpdateBreadcrumbs([
        {
            title:"Home",
            href:"dashboard"
        },
        {
            title:"Profile",
            href:route('profile.edit')
        }
    ]);
    return (
        < >
            <Head title="Profile" />
            <div className="">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                    />

                        <UpdatePasswordForm  />
                        <DeleteUserForm />
                </div>
            </div>
        </>
    );
}
