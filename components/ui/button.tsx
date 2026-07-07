import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[1rem] text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary px-6 py-3 text-[#5d3a3a] shadow-[0_8px_30px_rgba(251,207,202,0.18)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-secondary hover:shadow-[0_12px_34px_rgba(249,158,203,0.24)]",
        secondary:
          "border border-primary bg-transparent px-6 py-3 text-foreground shadow-sm backdrop-blur hover:bg-background-section",
        ghost:
          "px-4 py-2 text-body hover:bg-background-section hover:text-foreground",
        soft: "border border-primary/45 bg-[rgba(255,255,255,0.75)] px-5 py-3 text-foreground shadow-[0_8px_30px_rgba(251,207,202,0.14)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white",
        messenger:
          "bg-accent px-6 py-3 text-white shadow-[0_8px_30px_rgba(58,193,246,0.3)] hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#28b7ef]",
      },
      size: {
        default: "h-11",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-7 text-[0.95rem]",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
