import { cn } from "@/lib/utils";
import React from "react";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const SectionContainer = ({ children, className, ...props }: SectionContainerProps) => {
  return (
    <section className={cn("w-full py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto", className)} {...props}>
      {children}
    </section>
  );
};
