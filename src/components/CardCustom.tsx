// Card.tsx - Versión mejorada
import { useEffect, useState } from "react";
import "../styles/card.css";
// import chambaticon from '../public/images/chabaticon-home.png';

interface CardProps {
  image?: string;
  title: string;
}

const Card = ({ image, title }: CardProps) => {
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const steps = [1, 2, 3, 4, 5, 6];
    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setAnimationStep(steps[currentStep]);
        currentStep++;
      } else {
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`card  
      ${animationStep >= 1 ? 'animate-border-top' : ''}
      ${animationStep >= 2 ? 'animate-border-right' : ''}
      ${animationStep >= 3 ? 'animate-border-bottom' : ''}
      ${animationStep >= 4 ? 'animate-border-left' : ''}
      md:mx-10 xl:mx-5
    `}>
      <div className={`img-wrapper ${animationStep >= 5 ? 'animate-height' : ''}`}>
        <img
          className={`img ${animationStep >= 6 ? 'animate-show' : ''} w-full h-full object-cover rounded-sm`}
          src={`${import.meta.env.VITE_BASENAME}images/${image}`}
          alt="Proyecto"
        />
        <div className="overlay "></div>
      </div>
        <h4 className="px-1 lg:px-0 line-clamp-3 my-4">{title}</h4>
    </div>
  );
};

export default Card;