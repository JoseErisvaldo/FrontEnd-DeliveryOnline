import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonEstablishment = () => {
  return (
    <div className="border rounded-md p-4 shadow-sm space-y-3 w-full">
      <div className="flex justify-between items-center">
        <Skeleton className="w-2/3 h-6" />
        <Skeleton className="w-1/6 h-4 rounded-full" />
      </div>

      <div className="space-y-2 text-sm">
        <Skeleton className="w-1/2 h-4" /> 
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-1/3 h-4" />
        <Skeleton className="w-1/2 h-4" />
      </div>
    </div>
  );
};
