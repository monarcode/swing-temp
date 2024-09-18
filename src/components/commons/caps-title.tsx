import { cn } from "@/lib/utils";

export default function Caps({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLSpanElement>>) {
  return (
    <span
      className={cn(
        "text-[#8D8D8D] font-bold text-center block tracking-[0.125rem]",
        className
      )}
    >
      {children}
    </span>
  );
}
