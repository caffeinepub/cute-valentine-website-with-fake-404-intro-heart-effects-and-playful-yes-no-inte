import { useState } from 'react';
import ValentineExperience from './features/valentine/ValentineExperience';

function App() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <ValentineExperience />
      <footer className="fixed bottom-4 left-0 right-0 text-center text-xs text-muted-foreground z-50">
        <p>
          Built with love using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
              window.location.hostname || 'valentine-app'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>{' '}
          © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
