import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerClassName?: string;
}

export const SectionContainer = ({ children, className, containerClassName, ...props }: SectionContainerProps) => {
  return (
    <section className={cn("w-full", className)} {...props}>
      <div className={cn("max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
