import {FormEventHandler, useRef, useState} from 'react';
import InputError from '@/components/InputError';
import {useForm} from '@inertiajs/react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

export default function DeleteUserForm({ className = '' }: { className?: string }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        delete: destroy,
        reset,
        errors,
    } = useForm({
        password: '',
    });


    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <Card className={cn(``, className)}>
            <CardHeader>
                <CardTitle className="text-lg font-medium text-gray-900 dark:text-gray-100">Delete Account</CardTitle>
                <CardDescription className="mt-1 text-sm text-gray-600 dark:text-gray-400 max-w-xl">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Before
                    deleting your account, please download any data or information that you wish to retain.
                </CardDescription>
            </CardHeader>
            <CardContent >
                <AlertDialog
                    open={confirmingUserDeletion}
                    onOpenChange={(open)=>{
                       setConfirmingUserDeletion(open)
                    }}

                >
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete Account</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className={'max-w-xl'}>
                        <AlertDialogHeader>
                            <AlertDialogTitle> Are you sure you want to delete your account?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Once your account is deleted, all of its resources and data will be permanently deleted. Please
                                enter your password to confirm you would like to permanently delete your account.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <Label htmlFor="password" className={'sr-only'}>Password</Label>

                        <Input
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={deleteUser}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
    );
}
