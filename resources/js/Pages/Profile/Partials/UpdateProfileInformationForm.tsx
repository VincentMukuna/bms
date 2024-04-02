import InputError from '@/components/InputError';
import { Link, useForm, usePage } from '@inertiajs/react';
import {motion} from "framer-motion";
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

export default function UpdateProfileInformation({ mustVerifyEmail, status, className}: { mustVerifyEmail: boolean, status?: string, className?: string }) {
    const user = usePage<PageProps>().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (<Card className={className}>
        <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</CardTitle>

            <CardDescription className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Update your account's profile information and email address.
            </CardDescription>
        </CardHeader>
        <form onSubmit={submit}>
            <CardContent className={'space-y-6 max-w-xl'}>

                <div>
                    <Label htmlFor="name">Name</Label>

                    <Input
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name}/>
                </div>

                <div>
                    <Label htmlFor="email">Email</Label>

                    <Input
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email}/>
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (<div>
                    <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                        Your email address is unverified.
                        <Link
                            href={route('verification.send')}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                            Click here to re-send the verification email.
                        </Link>
                    </p>

                    {status === 'verification-link-sent' && (
                        <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                            A new verification link has been sent to your email address.
                        </div>)}
                </div>)}

    </CardContent>
    <CardFooter>
        <Button disabled={processing} >Save</Button>
        {
            recentlySuccessful && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-gray-600 dark:text-gray-400"
                >
                    Saved!
                </motion.div>
            )
        }
    </CardFooter>
        </form>


    </Card>);
}
