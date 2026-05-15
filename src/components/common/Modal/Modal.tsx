
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { type ModalProps } from "@/types";
function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "bg-bg-card rounded-lg border-none p-6 outline-none sm:max-w-[480px] md:p-8",
          className,
        )}
      >
        <DialogHeader>
          <DialogTitle className="text-heading-l text-black dark:text-white">
            {title}
          </DialogTitle>

          {description && (
            <DialogDescription className="text-body-l text-medium-grey mt-6">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="mt-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
