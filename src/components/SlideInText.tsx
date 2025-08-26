import { useEffect, useState } from "react";

interface SlideInTextProps {
  text: string;
  delay?: number; // retraso inicial en ms
  className?: string;
}

const SlideInText = ({ text, delay = 0, className }: SlideInTextProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <span
      className={`inline-block transition-transform duration-700 ease-out ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
      } ${className}`}
    >
      {text}
    </span>
  );
};

export default SlideInText;
