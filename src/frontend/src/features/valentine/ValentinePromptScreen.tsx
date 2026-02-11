import { useState } from 'react';
import { Heart } from 'lucide-react';
import HeartField from './HeartField';
import { useEvasiveButton } from './useEvasiveButton';

interface ValentinePromptScreenProps {
  onAccept: () => void;
}

export default function ValentinePromptScreen({ onAccept }: ValentinePromptScreenProps) {
  const [showButtons, setShowButtons] = useState(true);
  const { position: noPosition, handlePointerEnter, handlePointerMove, containerRef } = useEvasiveButton();

  const handleYesClick = () => {
    setShowButtons(false);
    setTimeout(onAccept, 300);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-secondary/40 to-accent/30 overflow-hidden">
      <HeartField variant="warm" />
      
      <div className="relative z-10 text-center space-y-12 px-4 max-w-2xl animate-bounce-in">
        <div className="space-y-6">
          <Heart className="w-20 h-20 mx-auto text-primary animate-pulse-heart" fill="currentColor" />
          <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground leading-tight">
            Will you be my valentine?
          </h1>
        </div>

        {showButtons && (
          <div ref={containerRef} className="relative h-32 flex items-center justify-center gap-6">
            <button
              onClick={handleYesClick}
              className="px-12 py-4 bg-primary text-primary-foreground rounded-full text-xl font-semibold shadow-soft hover:scale-110 transition-transform duration-200 hover:shadow-xl"
            >
              Yes! 💕
            </button>
            
            <button
              onPointerEnter={handlePointerEnter}
              onPointerMove={handlePointerMove}
              style={{
                position: 'absolute',
                left: `${noPosition.x}px`,
                top: `${noPosition.y}px`,
                transform: 'translate(-50%, -50%)',
              }}
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-150"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
