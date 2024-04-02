import { useRef, FormEventHandler } from 'react';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

export default function UpdatePasswordForm({ className = '' }: { className?: string }) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">Update Password</CardTitle>

                <CardDescription className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Ensure your account is using a long, random password to stay secure.
                </CardDescription>
            </CardHeader>
            <form onSubmit={updatePassword} className="">
                <CardContent className={'space-y-4 max-w-xl'}>
                    <div>
                        <Label htmlFor="current_password">Current Password</Label>

                        <Input
                            id="current_password"
                            ref={currentPasswordInput}
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                        />

                        <InputError message={errors.current_password} className="mt-2"/>
                    </div>

                    <div>
                        <Label htmlFor={'password'}>New Password</Label>

                        <Input
                            id="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />

                        <InputError message={errors.password} className="mt-2"/>
                    </div>

                    <div>
                        <Label htmlFor="password_confirmation" >Confirm Password</Label>

                        <Input
                            id="password_confirmation"
                            value={data.password_confirmation}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            type="password"
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                        />

                        <InputError message={errors.password_confirmation} className="mt-2"/>
                    </div>


                </CardContent>
                <CardFooter className="flex items-center gap-4">
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
