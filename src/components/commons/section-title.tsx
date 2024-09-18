import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export default function SectionTitle({
  children,
  className,
  ...others
}: React.PropsWithChildren<ComponentProps<"h2">>) {
  return (
    <h2
      className={cn(
        "text-5xl font-semibold tracking-tight text-neutral-900 text-balance leading-[3.75rem]",
        className
      )}
      {...others}
    >
      {children}
    </h2>
  );
}
