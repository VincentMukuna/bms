import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full items-center justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm caret-primary shadow-sm transition-colors file:h-full file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-primary placeholder:text-muted-foreground focus-visible:border-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

const InputGroup = React.forwardRef<HTMLDivElement, InputProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "grid w-full max-w-sm items-center gap-1.5",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    },
);
InputGroup.displayName = "InputGroup";

export { Input, InputGroup };
