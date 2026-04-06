export function SkeletonCard() {
  return (
    <div className="bg-white rounded-[16px] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)] animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 shimmer" />
      
      {/* Content skeleton */}
      <div className="p-6">
        {/* Title lines */}
        <div className="space-y-2 mb-4">
          <div className="h-5 bg-gray-200 rounded-lg w-4/5" />
          <div className="h-5 bg-gray-200 rounded-lg w-3/5" />
        </div>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-4 bg-gray-200 rounded-full w-20" />
          <div className="h-4 bg-gray-200 rounded-full w-20" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <div className="h-7 bg-gray-200 rounded-full w-16" />
          <div className="h-7 bg-gray-200 rounded-full w-20" />
          <div className="h-7 bg-gray-200 rounded-full w-14" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}
