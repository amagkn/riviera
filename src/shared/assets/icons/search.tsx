import React from "react";
import { cn } from "@/shared/utils";
import { IconProps } from "@/shared/types/icon-props";

export const SearchIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
  <svg
    ref={ref}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
    className={cn("", className)}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.092 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0m6.95-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .79-.79l-3.73-3.73A8.05 8.05 0 0 0 11.042 3z"
      clipRule="evenodd"
    ></path>
  </svg>
));

SearchIcon.displayName = "SearchIcon";
