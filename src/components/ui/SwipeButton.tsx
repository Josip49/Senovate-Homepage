import React, { useRef, useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SwipeButtonProps {
  onSwipeComplete: () => void;
  label?: string;
  className?: string;
}

const SwipeButton: React.FC<SwipeButtonProps> = ({
  onSwipeComplete,
  label = "Kostenloses Erstgespräch",
  className,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [completed, setCompleted] = useState(false);
  const startXRef = useRef(0);
  const thumbWidth = 56;

  const getMaxX = useCallback(() => {
    if (!trackRef.current) return 200;
    return trackRef.current.offsetWidth - thumbWidth - 8;
  }, []);

  const handleStart = useCallback((clientX: number) => {
    if (completed) return;
    setIsDragging(true);
    startXRef.current = clientX - dragX;
  }, [completed, dragX]);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || completed) return;
    const maxX = getMaxX();
    const newX = Math.max(0, Math.min(clientX - startXRef.current, maxX));
    setDragX(newX);
  }, [isDragging, completed, getMaxX]);

  const handleEnd = useCallback(() => {
    if (!isDragging || completed) return;
    setIsDragging(false);
    const maxX = getMaxX();
    if (dragX > maxX * 0.75) {
      setDragX(maxX);
      setCompleted(true);
      setTimeout(() => onSwipeComplete(), 400);
    } else {
      setDragX(0);
    }
  }, [isDragging, completed, dragX, getMaxX, onSwipeComplete]);

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  const progress = trackRef.current ? dragX / getMaxX() : 0;

  return (
    <div
      ref={trackRef}
      className={cn(
        "relative h-16 rounded-full bg-primary/10 border-2 border-primary/30 select-none overflow-hidden cursor-pointer backdrop-blur-sm",
        isDragging && "border-primary/50",
        completed && "border-accent bg-accent/10",
        className,
      )}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={handleEnd}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Shimmer effect */}
      {!completed && !isDragging && (
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          <div className="absolute inset-0 animate-[shimmer_2.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
        </div>
      )}

      {/* Label */}
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center text-sm font-medium tracking-wide transition-opacity duration-300 pointer-events-none",
          completed ? "text-accent opacity-100" : "text-primary/70",
        )}
        style={{ opacity: completed ? 1 : Math.max(0, 1 - progress * 2.5) }}
      >
        {completed ? "Weiterleitung…" : label}
      </span>

      {/* Swipe progress fill */}
      <div
        className="absolute top-0 left-0 h-full rounded-full transition-colors duration-200"
        style={{
          width: dragX + thumbWidth + 4,
          background: completed
            ? "hsl(var(--accent) / 0.15)"
            : `hsl(var(--primary) / ${0.05 + progress * 0.15})`,
        }}
      />

      {/* Thumb */}
      <div
        className={cn(
          "absolute top-1 w-14 h-[calc(100%-8px)] rounded-full flex items-center justify-center shadow-lg z-10",
          isDragging ? "scale-105" : "scale-100",
          completed ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground",
        )}
        style={{
          left: dragX + 4,
          transition: isDragging ? "none" : "left 0.4s cubic-bezier(0.32, 1.2, 0.5, 1), transform 0.2s, background-color 0.3s",
        }}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
      >
        <ArrowRight className={cn("w-5 h-5 transition-transform", completed && "rotate-90")} />
      </div>
    </div>
  );
};

export default SwipeButton;
