"use client";

import React from "react";
import { GridComponents } from "react-virtuoso";
import { cn } from "@one-dawn/ui";

const GridComponentsList: GridComponents["List"] = React.forwardRef(
  ({ children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {children}
      </div>
    );
  }
);
GridComponentsList.displayName = "GridComponentsList";

const GridComponentsItem: GridComponents["Item"] = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn(className, "w-full")}>
      {children}
    </div>
  );
};
GridComponentsItem.displayName = "GridComponentsItem";

export const VirtuosoGridComponent: GridComponents = {
  List: GridComponentsList,
  Item: GridComponentsItem,
};
