import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] bg-grid-gray-700/[0.03] relative overflow-hidden">
            {children}
        </div>
    );
}
