import { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden antialiased bg-grid-gray-700/[0.03] dark:bg-black/[0.96] dark:bg-grid-white/[0.02]">
            {children}
        </div>
    );
}
