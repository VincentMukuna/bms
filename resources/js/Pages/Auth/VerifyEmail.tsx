import PrimaryButton from "@/components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Guest from "@/Layouts/GuestLayout";
import { Button } from "@/components/ui/button";

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("verification.send"));
    };

    return (
        <Card className={"max-w-md"}>
            <Head title="Email Verification" />
            <CardHeader>
                <CardTitle>Verify Email</CardTitle>
                <CardDescription className="mb-4">
                    Thanks for signing up! Before getting started, could you
                    verify your email address by clicking on the link we just
                    emailed to you? If you didn&apos;t receive the email, we
                    will gladly send you another.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {status === "verification-link-sent" && (
                    <div className="mb-4 text-sm font-medium text-green-600 dark:text-green-400">
                        A new verification link has been sent to the email
                        address you provided during registration.
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-between">
                        <Button disabled={processing}>
                            Resend Verification Email
                        </Button>

                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:text-gray-400 dark:hover:text-gray-100 dark:focus:ring-offset-gray-800"
                        >
                            Log Out
                        </Link>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

VerifyEmail.layout = (page: any) => <Guest children={page} />;
