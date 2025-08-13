'use client';
import { useState } from 'react';

interface SimpleAvatarProps {
  src: string;
  alt: string;
  fallbackInitials?: string;
  className?: string;
}

export function SimpleAvatar({ 
  src, 
  alt, 
  fallbackInitials = "VK",
  className = ""
}: SimpleAvatarProps) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    console.log('Avatar image failed to load:', src);
    setImageError(true);
  };

  const handleImageLoad = () => {
    console.log('Avatar image loaded successfully:', src);
    setImageLoaded(true);
  };

  if (imageError) {
    // Show fallback with initials
    return (
      <div className={`w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold text-4xl ${className}`}>
        {fallbackInitials}
      </div>
    );
  }

  return (
    <>
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imageLoaded ? 'block' : 'hidden'} ${className}`}
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
    </>
  );
}