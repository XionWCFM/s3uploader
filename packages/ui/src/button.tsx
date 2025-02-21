import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "./cn";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  " relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
  spinnerColor?: string;
  spinnerFill?: string;
  spinnerSize?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      asChild = false,
      loading = false,
      left,
      right,
      disabled,
      spinnerColor = "#FFFFFF",
      spinnerFill = "#000000",
      spinnerSize,
      style,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const slotClass = !!left || !!right ? "flex items-center justify-center gap-x-[4px]" : "";
    const ariaLabel = (props["aria-label"] ?? loading) ? "loading progress" : "button";
    const isDisabled = disabled || loading;
    return (
      <Comp
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        className={cn(slotClass, buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <>
          {loading ? (
            <span className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <Spinner fill={spinnerFill} color={spinnerColor} size={spinnerSize} />
            </span>
          ) : null}
          {left && !loading ? <span>{left}</span> : null}
          <div className={`${loading ? "invisible" : ""}`}>{children}</div>
          {right ? <span className="ml-[2px]">{right}</span> : null}
        </>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
