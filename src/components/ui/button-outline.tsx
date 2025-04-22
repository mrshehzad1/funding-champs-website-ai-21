
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonOutlineVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-2 border-champion-800 text-champion-800 hover:bg-champion-800 hover:text-white",
        teal:
          "border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white",
        white:
          "border-2 border-white text-white hover:bg-white hover:text-champion-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonOutlineProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonOutlineVariants> {}

const ButtonOutline = React.forwardRef<HTMLButtonElement, ButtonOutlineProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonOutlineVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonOutline.displayName = "ButtonOutline";

export { ButtonOutline, buttonOutlineVariants };
