import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import InputError from "@/components/InputError";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout >
            <Head title="Register"/>
            <div className="w-full lg:grid lg:min-h-[600px] flex flex-col items-center justify-center  ">
            <Card className="mx-auto max-w-sm z-10">
                <CardHeader>
                    <CardTitle className="text-xl">Sign Up</CardTitle>
                    <CardDescription>
                        Enter your information to create an account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={submit} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Max Robertson"
                                autoComplete="name"
                                required
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="username"
                                placeholder="m@example.com"
                                required
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="new-password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password-confirmation">Confirm password</Label>
                            <Input
                                id="password-confirmation"
                                type="password"
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            <InputError message={errors.password_confirmation} />
                        </div>
                        <Button type="submit" className="w-full" disabled={processing}>
                            Create an account
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href={route('login')} className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>

            </div>

            {/*<form onSubmit={submit}>*/}
            {/*    <div>*/}
            {/*        <InputLabel htmlFor="name" value="Name" />*/}

            {/*        <TextInput*/}
            {/*            id="name"*/}
            {/*            name="name"*/}
            {/*            value={data.name}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="name"*/}
            {/*            isFocused={true}*/}
            {/*            onChange={(e) => setData('name', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.name} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="email" value="Email" />*/}

            {/*        <TextInput*/}
            {/*            id="email"*/}
            {/*            type="email"*/}
            {/*            name="email"*/}
            {/*            value={data.email}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="username"*/}
            {/*            onChange={(e) => setData('email', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.email} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="password" value="Password" />*/}

            {/*        <TextInput*/}
            {/*            id="password"*/}
            {/*            type="password"*/}
            {/*            name="password"*/}
            {/*            value={data.password}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="new-password"*/}
            {/*            onChange={(e) => setData('password', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.password} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="mt-4">*/}
            {/*        <InputLabel htmlFor="password_confirmation" value="Confirm Password" />*/}

            {/*        <TextInput*/}
            {/*            id="password_confirmation"*/}
            {/*            type="password"*/}
            {/*            name="password_confirmation"*/}
            {/*            value={data.password_confirmation}*/}
            {/*            className="mt-1 block w-full"*/}
            {/*            autoComplete="new-password"*/}
            {/*            onChange={(e) => setData('password_confirmation', e.target.value)}*/}
            {/*            required*/}
            {/*        />*/}

            {/*        <InputError message={errors.password_confirmation} className="mt-2" />*/}
            {/*    </div>*/}

            {/*    <div className="flex items-center justify-end mt-4">*/}
            {/*        <Link*/}
            {/*            href={route('login')}*/}
            {/*            className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"*/}
            {/*        >*/}
            {/*            Already registered?*/}
            {/*        </Link>*/}

            {/*        <PrimaryButton className="ms-4" disabled={processing}>*/}
            {/*            Register*/}
            {/*        </PrimaryButton>*/}
            {/*    </div>*/}
            {/*</form>*/}
    </GuestLayout>
);
}
