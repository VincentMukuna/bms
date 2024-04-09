

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Head, Link, useForm} from "@inertiajs/react";
import {FormEventHandler, useEffect} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import Guest from "@/Layouts/GuestLayout";
import InputError from "@/components/InputError";

export default function Login({ status, canResetPassword }: { status?: string, canResetPassword: boolean }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'));
    };
    return (
        <>
            <Head title="Log in"/>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
            <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 ">
                <form onSubmit={submit} className="flex items-center justify-center py-12">
                    <div className="mx-auto grid w-[350px] gap-6">
                        <div className="grid gap-2 text-center">
                            <h1 className="text-3xl font-bold">Login</h1>
                            <p className="text-balance text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    name={'email'}
                                    placeholder="m@example.com"
                                    autoComplete={'username'}
                                    value={data.email}
                                    required
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {canResetPassword&&<Link
                                        href={route('password.request')}
                                        className="ml-auto inline-block text-sm underline"
                                    >
                                        Forgot your password?
                                    </Link>}
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    name={'password'}
                                    autoComplete={'current-password'}
                                    required
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}/>
                                <InputError message={errors.password} />
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" checked={data.remember}
                                          onCheckedChange={(checked:boolean) => setData('remember', checked)}/>
                                <Label
                                    htmlFor="remember"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Remember me
                                </Label>
                            </div>
                            <Button type="submit" className="w-full" disabled={processing} >
                                Login
                            </Button>
                        </div>
                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href={route('register')} className="underline">
                                Sign up
                            </Link>
                        </div>
                    </div>
                </form>
                <div className="hidden bg-muted lg:block h-screen">
                    <img
                        src="/images/billboard-login.jpg"
                        alt="bluish billboard as viewed from below"
                        className=" object-cover w-full h-full"
                    />
                </div>
            </div>
        </>
    )
}

Login.layout = (page: any) => <Guest children={page}/>;
