import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { type DropdownProps } from "@/types";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

function Dropdown({ items, trigger }: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className={cn(
          "w-48 rounded-lg border-none p-4 shadow-lg",

          "bg-bg-card",
        )}
      >
        {items.map((item, index) => (
          <Fragment key={item.label?.toString() ?? index}>
            <DropdownMenuItem
              onClick={item.onClick}
              className={cn(
                "text-body-l text-medium-grey cursor-pointer rounded-sm px-4 py-2 transition-colors outline-none",

                "focus:bg-main-purple/10 focus:text-main-purple",

                item.className,
              )}
            >
              {item.label}
            </DropdownMenuItem>

            {item.separator && (
              <DropdownMenuSeparator className="bg-border-line my-2" />
            )}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Dropdown;
