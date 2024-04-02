import {Head, Link} from '@inertiajs/react';
import { PageProps } from '@/types';
import Guest from "@/Layouts/GuestLayout";
import {Button, buttonVariants} from "@/components/ui/button";
import {Spotlight} from "@/components/Spotlight";
import TypewriterEffect, {TypewriterEffectSmooth} from "@/components/typewriter-effect";
import {cn} from "@/lib/utils";
import {ArrowRight, ArrowRightCircle} from "lucide-react";
export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {

    const words = [
        {
            text: "Manage",
        },
        {
            text: "campaigns",
        },
        {
            text: "with",
        },
        {
            text: "AdvertEase.",
            className: "text-primary dark:text-primary",
        },
    ];

    return (<Guest>
        <Head title="Welcome"/>
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-40"
            fill="white"
        />
        <div className={" max-w-xl flex flex-col  p-4 text-center  items-center "}>
            <TypewriterEffectSmooth  words={words} className={'text-4xl'} />
            <p className={'text-sm sm:text-lg dark:text-muted-foreground text-accent-foreground'}>
                Take control of your billboard campaigns with our advanced management system.
                Our platform empowers you to optimize every aspect of your outdoor advertising strategy.
            </p>
            <div className={'flex gap-4 mt-4'}>
                <Link
                    href={route('register')}
                    className={cn(buttonVariants({ size: "lg"}))}
                >
                   Sign Up
                </Link>

                <Link
                    href={route('dashboard')}
                    className={cn(buttonVariants({variant: "outline", size: "lg"}), "inline-flex gap-2")}
                >
                    Try it
                    <ArrowRight className={'w-4 h-4'} />
                </Link>
            </div>

        </div>

    </Guest>);
}
