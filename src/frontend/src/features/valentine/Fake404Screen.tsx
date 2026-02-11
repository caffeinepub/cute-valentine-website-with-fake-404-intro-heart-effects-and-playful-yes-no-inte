import { AlertCircle } from 'lucide-react';

interface Fake404ScreenProps {
  onGoBack: () => void;
}

export default function Fake404Screen({ onGoBack }: Fake404ScreenProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <div className="text-center space-y-6 px-4 animate-bounce-in">
        <AlertCircle className="w-24 h-24 mx-auto text-muted-foreground/40" />
        <h1 className="text-8xl font-bold text-muted-foreground/60">404</h1>
        <p className="text-2xl text-muted-foreground">Page not found</p>
        <p className="text-sm text-muted-foreground/70">
          Oops! The page you're looking for doesn't exist...
        </p>
      </div>
    </div>
  );
}
