import { useEffect, FormEventHandler } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
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
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 items-center ">
                <div className="hidden bg-muted lg:block h-screen">
                    <img
                        src="/images/empty2-unsplash.jpg"
                        alt="Image"
                        className=" object-cover w-full h-full"
                    />
                </div>
                <div className="mx-auto grid w-[350px] gap-6 ">
                    <div className="grid text-center">
                        <h1 className="text-3xl font-bold">Sign Up</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your information to create an account
                        </p>
                    </div>
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
                            <InputError message={errors.name}/>
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
                            <InputError message={errors.password}/>
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
                            <InputError message={errors.password_confirmation}/>
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
                </div>

            </div>
        </GuestLayout>);
}
