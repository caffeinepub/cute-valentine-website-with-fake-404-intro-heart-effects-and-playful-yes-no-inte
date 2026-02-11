import { useState, useEffect } from 'react';
import Fake404Screen from './Fake404Screen';
import ValentinePromptScreen from './ValentinePromptScreen';
import SuccessScreen from './SuccessScreen';

type Phase = 'fake404' | 'prompt' | 'success';

export default function ValentineExperience() {
  const [phase, setPhase] = useState<Phase>('fake404');

  useEffect(() => {
    // Auto-transition from fake 404 to prompt after 2 seconds
    if (phase === 'fake404') {
      const timer = setTimeout(() => {
        setPhase('prompt');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const handleAccept = () => {
    setPhase('success');
  };

  const handleGoBack = () => {
    setPhase('prompt');
  };

  return (
    <div className="relative w-full min-h-screen">
      {phase === 'fake404' && <Fake404Screen onGoBack={handleGoBack} />}
      {phase === 'prompt' && <ValentinePromptScreen onAccept={handleAccept} />}
      {phase === 'success' && <SuccessScreen />}
    </div>
  );
}
