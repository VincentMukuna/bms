import { useEffect, FormEventHandler } from 'react';
import InputError from '@/components/InputError';
import InputLabel from '@/components/InputLabel';
import PrimaryButton from '@/components/PrimaryButton';
import TextInput from '@/components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Guest from "@/Layouts/GuestLayout";
export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <Card className={'max-w-md'}>
            <Head title="Confirm Password" />
            <CardHeader>
                <CardTitle>
                    Confirm Password
                </CardTitle>
                <CardDescription className="">
                    This is a secure area of the application. Please confirm your password before continuing.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit}>
                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password"/>

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2"/>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ms-4" disabled={processing}>
                            Confirm
                        </PrimaryButton>
                    </div>
                </form>
            </CardContent>
        </Card>);
}

ConfirmPassword.layout = (page:any)=>(<Guest children={page}/>)

