import { Heart } from 'lucide-react';
import HeartField from './HeartField';

export default function SuccessScreen() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-blue-100/30 to-blue-200/40 overflow-hidden">
      <HeartField variant="blue" />
      
      <div className="relative z-10 text-center space-y-12 px-4 max-w-2xl animate-bounce-in">
        <div className="space-y-8">
          <Heart 
            className="w-32 h-32 mx-auto animate-pulse-heart" 
            fill="oklch(0.60 0.18 250)"
            stroke="oklch(0.60 0.18 250)"
          />
          <h1 className="text-6xl md:text-7xl font-display font-bold text-foreground leading-tight">
            I Love you Karuvaya.
          </h1>
          <p className="text-2xl text-muted-foreground font-medium">
            Forever and always 💙
          </p>
        </div>
      </div>
    </div>
  );
}
