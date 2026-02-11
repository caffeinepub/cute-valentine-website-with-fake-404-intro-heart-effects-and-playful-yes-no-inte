import { useState, useRef, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasiveButton() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 150, y: 0 });

  const moveButton = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 100;
    const buttonHeight = 48;
    const padding = 20;

    // Calculate safe bounds
    const minX = buttonWidth / 2 + padding;
    const maxX = container.width - buttonWidth / 2 - padding;
    const minY = buttonHeight / 2 + padding;
    const maxY = container.height - buttonHeight / 2 - padding;

    // Generate random position within bounds
    const newX = minX + Math.random() * (maxX - minX);
    const newY = minY + Math.random() * (maxY - minY);

    setPosition({ x: newX, y: newY });
  }, []);

  const handlePointerEnter = useCallback(() => {
    moveButton();
  }, [moveButton]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;

    const button = e.currentTarget as HTMLElement;
    const buttonRect = button.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    // Calculate pointer position relative to button center
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;
    const distanceX = e.clientX - buttonCenterX;
    const distanceY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // If pointer is close, move the button
    if (distance < 80) {
      moveButton();
    }
  }, [moveButton]);

  return {
    position,
    handlePointerEnter,
    handlePointerMove,
    containerRef,
  };
}
