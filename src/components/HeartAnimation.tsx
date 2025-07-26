import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartAnimationProps {
  show: boolean;
  onComplete: () => void;
}

export const HeartAnimation = ({ show, onComplete }: HeartAnimationProps) => {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (show) {
      const newHearts = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100
      }));
      setHearts(newHearts);

      const timer = setTimeout(() => {
        setHearts([]);
        onComplete();
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.id * 0.1}s`,
            animationDuration: '1.5s'
          }}
        >
          <Heart 
            className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" 
            style={{
              filter: 'drop-shadow(0 0 10px rgba(239, 68, 68, 0.8))'
            }}
          />
        </div>
      ))}
    </div>
  );
};