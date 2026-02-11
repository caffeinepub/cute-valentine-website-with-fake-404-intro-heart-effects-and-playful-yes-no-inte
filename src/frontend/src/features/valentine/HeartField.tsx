import { useEffect, useRef } from 'react';
import { Heart } from 'lucide-react';

interface HeartFieldProps {
  variant: 'warm' | 'blue';
}

interface FloatingHeart {
  id: number;
  x: number;
  duration: number;
  delay: number;
  size: number;
}

export default function HeartField({ variant }: HeartFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heartsRef = useRef<FloatingHeart[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    // Generate initial hearts
    const initialHearts: FloatingHeart[] = [];
    const heartCount = 15;
    
    for (let i = 0; i < heartCount; i++) {
      initialHearts.push({
        id: nextIdRef.current++,
        x: Math.random() * 100,
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 5,
        size: 20 + Math.random() * 20,
      });
    }
    
    heartsRef.current = initialHearts;

    // Add new hearts periodically
    const interval = setInterval(() => {
      heartsRef.current = [
        ...heartsRef.current,
        {
          id: nextIdRef.current++,
          x: Math.random() * 100,
          duration: 8 + Math.random() * 6,
          delay: 0,
          size: 20 + Math.random() * 20,
        },
      ];

      // Keep only the last 20 hearts
      if (heartsRef.current.length > 20) {
        heartsRef.current = heartsRef.current.slice(-20);
      }

      // Force re-render
      if (containerRef.current) {
        containerRef.current.dataset.update = String(Date.now());
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const heartColor = variant === 'blue' 
    ? 'oklch(0.60 0.18 250)' 
    : 'oklch(0.75 0.20 15)';

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {heartsRef.current.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: `${heart.x}%`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              color: heartColor,
              fill: heartColor,
              opacity: 0.6,
            }}
          />
        </div>
      ))}
    </div>
  );
}
