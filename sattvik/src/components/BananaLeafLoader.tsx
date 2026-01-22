import { useState, useEffect } from 'react';

interface BananaLeafLoaderProps {
  onComplete: () => void;
}

export default function BananaLeafLoader({ onComplete }: BananaLeafLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  // --- THIS IS THE UPDATED SECTION ---
  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        // If we're already at 100, just stay at 100.
        if (prev >= 100) {
          return 100;
        }
        
        // Add a random amount, but cap it at 100.
        const next = prev + Math.random() * 15;
        return Math.min(next, 100); 
      });
    }, 100); // Run interval every 100ms

    // Force completion and fade-out
    const completeTimeout = setTimeout(() => {
      setProgress(100); // Ensure it's exactly 100
      
      setTimeout(() => {
        setIsVisible(false); // Start fade-out
      }, 300); // Wait 300ms at 100%

      setTimeout(() => {
        onComplete(); // Tell App.tsx to unmount this
      }, 800); // Wait for fade-out (500ms) + 300ms = 800ms
      
    }, 2500); // Total load time

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);
  // --- END OF UPDATED SECTION ---

  return (
    <div
      className={`fixed inset-0 z-[100] bg-gradient-to-br from-hunter-50 via-calPoly-50 to-dutch-100 transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 -translate-y-full'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-hunter-200 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-24 w-40 h-40 bg-citron-200 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-xanthous-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Chakra */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center space-y-8">
          
          {/* --- THIS BLOCK IS UPDATED --- */}
          {/* Stacked Chakra Logo with Fade Animation */}
          <div className="relative w-32 h-32 animate-fade-in-out">
            {/* Spinning Background (Bottom Layer) */}
            <img
              src="/chakra-background.png"
              alt="Spinning Chakra"
              className="w-full h-full animate-spin"
              style={{ animationDuration: '10s' }} // Makes it a slow, graceful spin
            />
            {/* Static Person (Top Layer) */}
            <img
              src="/person-foreground.png"
              alt="Meditating Person"
              className="absolute top-0 left-0 w-full h-full" // Sits on top, no spin
            />
          </div>
          {/* --- END OF UPDATED BLOCK --- */}

          {/* Loading Text */}
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-calPoly-700 mb-2">
              Welcome to Satvify
            </h2>
            <p className="font-body text-calPoly-600 mb-4">
              Nourishment in progress...
            </p>
            
            {/* Progress Bar */}
            <div className="w-64 h-2 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-hunter-500 to-calPoly-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="font-body text-sm text-calPoly-500 mt-2">
              {Math.round(progress)}%
            </p>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-8 h-8 bg-hunter-300 rounded-full opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-float-delayed">
        <div className="w-6 h-6 bg-citron-400 rounded-full opacity-50" />
      </div>
      <div className="absolute bottom-40 left-32 animate-float-slow">
        <div className="w-10 h-10 bg-xanthous-300 rounded-full opacity-40" />
      </div>
    </div>
  );
}