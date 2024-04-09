import React from "react";
import { Skeleton } from "./ui/skeleton";

const CardSkeleton = () => {
  return (
    <Skeleton className="w-full p-4 bg-slate-200 rounded-xl">
      <div className="flex items-center justify-between gap-5 mb-7">
        <Skeleton className="w-full h-20 bg-slate-400" />
        <Skeleton className="w-1/2 h-20 bg-slate-400" />
      </div>

      <Skeleton className="w-full h-48 bg-slate-400 mb-5" />
      <Skeleton className="w-full h-16 bg-slate-400" />
    </Skeleton>
  );
};

export default CardSkeleton;
