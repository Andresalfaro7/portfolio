import { useEffect, useState } from "react";

const CursorCustom = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [clickEffect, setClickEffect] = useState(false);

    // Efecto para seguir el movimiento del mouse
    useEffect(() => {

        const handleMouseMove = (e: MouseEvent): void => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleClick = () => {
            setClickEffect(true);
            setTimeout(() => setClickEffect(false), 300);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);
    return (
        <div
            className="cursor"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                backgroundColor: clickEffect ? '#BBFBFF' : 'transparent'
            }}
        />
    );
};

export default CursorCustom;
