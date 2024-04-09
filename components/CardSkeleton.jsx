import React from "react";
import { Skeleton } from "./ui/skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton className="w-full p-4 bg-slate-200 dark:bg-slate-600 rounded-xl">
      <div className="flex items-center justify-between gap-5 mb-7">
        <Skeleton className="w-full h-20 bg-slate-400 dark:bg-slate-700" />
        <Skeleton className="w-1/2 h-20 bg-slate-400 dark:bg-slate-700" />
      </div>

      <Skeleton className="w-full h-48 bg-slate-400 mb-7 dark:bg-slate-700" />
      <Skeleton className="w-full h-24 bg-slate-400 dark:bg-slate-700" />
    </Skeleton>
  );
};

export default CardSkeleton;
