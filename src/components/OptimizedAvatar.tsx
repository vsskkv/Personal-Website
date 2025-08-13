'use client';
import { useState, useEffect } from 'react';

interface OptimizedAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  fallbackInitials?: string;
}

export function OptimizedAvatar({ 
  src, 
  alt, 
  size = 192, 
  className = "",
  fallbackInitials = "VK" 
}: OptimizedAvatarProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.log('Image failed to load:', src);
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully:', src);
    setIsLoading(false);
    setImageLoaded(true);
  };

  // Add a timeout to prevent infinite loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading && !imageLoaded) {
        console.log('Image loading timeout, showing fallback');
        setImageError(true);
        setIsLoading(false);
      }
    }, 5000); // 5 second timeout

    return () => clearTimeout(timeout);
  }, [isLoading, imageLoaded]);

  return (
    <div className={`relative overflow-hidden rounded-full ${className}`} style={{ width: size, height: size }}>
      {/* Loading skeleton */}
      {isLoading && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      
      {/* Image or fallback */}
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onError={handleImageError}
          onLoad={handleImageLoad}
          loading="eager"
          style={{ 
            width: size, 
            height: size
          }}
        />
      ) : (
        /* Fallback with initials */
        <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold" 
             style={{ fontSize: size * 0.25 }}>
          {fallbackInitials}
        </div>
      )}
    </div>
  );
}