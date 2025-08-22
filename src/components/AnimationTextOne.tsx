import React, { useState, useEffect } from "react";

interface AnimationTextOneProps {
  text: string;
  speed?: number;
  className?: string;
}

const AnimationTextOne: React.FC<AnimationTextOneProps> = ({ text, speed = 100, className }) => {
  const [displayedIndex, setDisplayedIndex] = useState(0);

  // Convertimos el texto a array de caracteres seguro Unicode
  const characters = Array.from(text);

  useEffect(() => {
    if (!text) return;

    const interval = setInterval(() => {
      setDisplayedIndex((prev) => {
        if (prev < characters.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, characters.length]);

  return (
    <span className={`whitespace-pre-wrap ${className}`}>
      {characters.slice(0, displayedIndex).join("")}
    </span>
  );
};

export default AnimationTextOne;
