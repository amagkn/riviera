import React from "react";
import { cn } from "@/shared/utils";
import { IconProps } from "@/shared/types/icon-props";

export const BellIcon = React.forwardRef<SVGSVGElement, IconProps>(({ className, ...props }, ref) => (
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
    <path stroke="currentColor" strokeLinecap="round" d="M15 18.5a3 3 0 1 1-6 0"></path>
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      d="M5.5 10.532V9a6.5 6.5 0 0 1 13 0v1.532c0 1.42.564 2.782 1.568 3.786l.032.032c.256.256.4.604.4.966v2.934a.25.25 0 0 1-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.934c0-.363.144-.71.4-.966l.032-.032A5.35 5.35 0 0 0 5.5 10.532Z"
    ></path>
  </svg>
));

BellIcon.displayName = "BellIcon";
