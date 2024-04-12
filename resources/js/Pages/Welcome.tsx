import { Head, Link } from "@inertiajs/react";
import Guest from "@/Layouts/GuestLayout";
import { buttonVariants } from "@/components/ui/button";
import { Spotlight } from "@/components/Spotlight";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
export default function Welcome() {
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

    return (
        <>
            <Head title="Welcome" />
            <Spotlight
                className="-top-40 left-0 md:-top-40 md:left-60"
                fill="white"
            />
            <div
                className={
                    " flex max-w-xl flex-col  items-center p-4  text-center "
                }
            >
                <TypewriterEffectSmooth words={words} className={"text-4xl"} />
                <p
                    className={
                        "text-sm text-accent-foreground dark:text-muted-foreground sm:text-lg"
                    }
                >
                    Take control of your billboard campaigns with our advanced
                    management system. Our platform empowers you to optimize
                    every aspect of your outdoor advertising strategy.
                </p>
                <div className={"mt-4 flex gap-4"}>
                    <Link
                        href={route("register")}
                        className={cn(buttonVariants({ size: "lg" }))}
                    >
                        Sign Up
                    </Link>

                    <Link
                        href={route("dashboard")}
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "inline-flex gap-2",
                        )}
                    >
                        Try it
                        <ArrowRight className={"h-4 w-4"} />
                    </Link>
                </div>
            </div>
        </>
    );
}

Welcome.layout = (page: any) => <Guest children={page} />;
