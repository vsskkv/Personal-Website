interface SkeletonLoaderProps {
  width?: string;
  height?: string;
  className?: string;
}

export function SkeletonLoader({ width = "w-full", height = "h-4", className = "" }: SkeletonLoaderProps) {
  return (
    <div className={`${width} ${height} bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded ${className}`}>
      <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
    </div>
  );
}

export function TypewriterSkeleton({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`inline-block ${className}`}>
      <SkeletonLoader 
        width={`w-${Math.min(text.length * 0.6, 96)}`} 
        height="h-6" 
        className="rounded-md"
      />
    </div>
  );
}