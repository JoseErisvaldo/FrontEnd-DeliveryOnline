import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonButton = () => {
  return (
    <div className="flex items-center justify-center  shadow-sm">
      <Skeleton className="h-10 w-32 rounded-md" />
    </div>
  );
};
