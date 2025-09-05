import { motion } from 'framer-motion';

interface ComputerAnimationProps {
    width: string;
    height: string;
}
const ComputerAnimation = ({ width, height }: ComputerAnimationProps) => {
    const iconData = [
        { x: 440, y: 850, scale: 2 },
        { x: 490, y: 850, scale: 2 },
        { x: 540, y: 850, scale: 2 },
        { x: 590, y: 850, scale: 2 },
        { x: 640, y: 850, scale: 2 },
    ];
    return (
        <svg width={width} height={height} viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <motion.path
                className="menu"
                d="M145.7 736h732.6c16.5 0 30-13.5 30-30v-22.1H115.7V706c0 16.6 13.5 30 30 30z"
                fill="#44444E"
                stroke={"#44444E"}
                strokeWidth={3}
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{ pathLength: { duration: 4, ease: "easeInOut", delay: 1.5 }, fillOpacity: { delay: 5, duration: 1 } }}
            />
            {iconData.map((icon, index) => (
                <g
                    key={index}
                    transform={`translate(${icon.x}, ${icon.y}) scale(${icon.scale}) rotate(180)`} // Posición y escala base
                >
                    <motion.g
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: [1, 0.7, 1] }} // Contracción y recuperación del tamaño
                        transition={{
                            duration: 0.4,       // Velocidad de cada animación
                            ease: "easeInOut",
                            delay: index * 0.3,  // Cada botón se anima uno tras otro
                            repeat: Infinity,    // Ciclo infinito
                            repeatDelay: 1       // Tiempo de espera entre ciclos
                        }}
                        style={{
                            transformOrigin: "bottom center" // 🔹 Fija la base del botón, solo se contrae hacia arriba
                        }}
                    >
                        <motion.path
                            opacity="1"
                            d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7"
                            fill="#D3DAD9"
                            stroke="#D3DAD9"
                            strokeLinecap="round"
                            strokeWidth={0.5}
                            initial={{ pathLength: 0, fillOpacity: 0 }}
                            animate={{ pathLength: 1, fillOpacity: 1 }}
                            transition={{ pathLength: { duration: 4, ease: "easeInOut" }, fillOpacity: { delay: 2, duration: 1 } }}
                        />
                    </motion.g>
                </g>
            ))}
            <motion.path
                className="screen"
                d="M878.3 152.9H145.7c-38.6 0-70 31.4-70 70V706c0 38.6 31.4 70 70 70h732.6c38.6 0 70-31.4 70-70V222.9c0-38.6-31.4-70-70-70z m30 531V706c0 16.5-13.5 30-30 30H145.7c-16.5 0-30-13.5-30-30V222.9c0-16.5 13.5-30 30-30h732.6c16.5 0 30 13.5 30 30v461zM678 871.1H346c-11 0-20-9-20-20s9-20 20-20h332c11 0 20 9 20 20s-9 20-20 20z"
                stroke="#3ABEF9"
                strokeWidth={3}
                fill="#3ABEF9" // Empieza con el mismo color pero lo animamos
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{ pathLength: { duration: 6, ease: "easeInOut" }, fillOpacity: { delay: 3, duration: 1 } }}
            />
            <motion.path
                className="menu-buttons"
                d="M436.8 720.1H275.2c-5 0-9-4-9-9s4-9 9-9h161.6c5 0 9 4 9 9 0 4.9-4.1 9-9 9zM220.6 720.1h-26.5c-5 0-9-4-9-9s4-9 9-9h26.5c5 0 9 4 9 9 0 4.9-4.1 9-9 9z"
                fill="#FFFFFF"
                stroke={"#FFFFFF"}
                strokeWidth={4}
                initial={{ pathLength: 0, fillOpacity: 0 }}
                animate={{ pathLength: 1, fillOpacity: 1 }}
                transition={{ pathLength: { duration: 6, ease: "easeInOut", delay: 1 }, fillOpacity: { delay: 4, duration: 1 } }}
            />
        </svg>
    )
}

export default ComputerAnimation;