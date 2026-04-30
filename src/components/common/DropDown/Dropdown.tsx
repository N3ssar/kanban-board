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
          // التنسيقات الثابتة (شيلنا الحدود الافتراضية وحطينا شادو)
          "w-48 rounded-lg border-none p-4 shadow-lg",

          // سحب لون الخلفية (أبيض في اللايت وكحلي في الدارك أوتوماتيك من الـ CSS)
          "bg-bg-card",
        )}
      >
        {items.map((item, index) => (
          <Fragment key={item.label?.toString() ?? index}>
            <DropdownMenuItem
              onClick={item.onClick}
              className={cn(
                // التنسيقات الأساسية للعنصر
                "text-body-l text-medium-grey cursor-pointer rounded-sm px-4 py-2 transition-colors outline-none",

                // تأثير الهوفر الافتراضي (اللون الموف)
                "focus:bg-main-purple/10 focus:text-main-purple",

                // هنا بنستقبل الكلاسات الإضافية عشان نعمل Overwrite براحتنا
                item.className,
              )}
            >
              {item.label}
            </DropdownMenuItem>

            {/* سحب لون الخط الفاصل أوتوماتيك من ملف الـ CSS */}
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
