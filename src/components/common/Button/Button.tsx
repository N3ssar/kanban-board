import { cva } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { type ButtonProps } from "../../../types";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-bold transition-colors duration-200 focus:outline-none cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-main-purple text-white hover:bg-main-purple-hover ",
        secondary:
          "bg-border-line text-main-purple hover:bg-main-purple hover:text-white dark:bg-white dark:text-main-purple",
        destructive: "bg-red text-white hover:bg-red-hover ",
      },
      size: {
        sm: "h-10 px-4 text-body-m",
        md: "h-12 px-6 text-heading-m",
        lg: "h-14 px-8 text-heading-l",
      },
      isDisabled: {
        true: "cursor-not-allowed opacity-25 hover:bg-none hover:text-gray-400",
      },
      isFullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  children,
  variant,
  size,
  className,
  isFullWidth,
  isDisabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, isFullWidth, isDisabled }),
        className,
      )}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
