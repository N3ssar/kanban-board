import { forwardRef } from "react";
import { cn } from "../../../lib/utils";

import { type TextFieldProps } from "../../../types/index";

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, className, required, id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className={cn("relative flex flex-col gap-2", className)}>
        {label && (
          <label htmlFor={inputId} className="text-body-m font-bold">
            {label} {required && <span className="text-red">*</span>}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          className={cn(
            "text-body-l flex h-10 w-full rounded border px-4 py-2 transition-colors",
            "border-medium-grey/25 placeholder:text-medium-grey/50 bg-transparent",
            "text-black dark:text-white",
            "focus:ring-main-purple focus:ring-1 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red focus:ring-red pr-12",
          )}
          autoComplete="on"
          {...props}
        />

        {error && (
          <span className="text-body-l text-red absolute top-9.5 right-4">
            {error}
          </span>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default TextField;
