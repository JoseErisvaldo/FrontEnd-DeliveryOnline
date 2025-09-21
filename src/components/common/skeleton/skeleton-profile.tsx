import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonUser = () => {
  return (
    <div className="border rounded-md p-4 shadow-sm space-y-3 w-full max-w-sm">
      <Skeleton className="w-1/2 h-6" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-5/6 h-4" />
      <Skeleton className="w-1/3 h-4" />
    </div>
  );
};
