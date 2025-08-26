import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import contacts from '../data/dataContacts.json';
import AnimationTextOne from "../components/AnimationTextOne";
const Contact = () => {
    
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-8">
            <motion.h2
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1>Contáctame</h1>
            </motion.h2>
            <motion.p
                className="text-gray-300 mb-12 text-center max-w-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <AnimationTextOne text="Estoy disponible para nuevos proyectos. Conecta conmigo en LinkedIn, GitHub o envíame un email."  />
            </motion.p>

            <div className="flex gap-10">
                {contacts.map((contact, idx) => {
                    const IconComponent = contact.icon === "FaLinkedin" ? FaLinkedin :
                        contact.icon === "FaGithub" ? FaGithub :
                            FaEnvelope;

                    return (
                        <motion.a
                            key={idx}
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-center group"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="relative">
                                <IconComponent className={`text-6xl ${contact.color} transition-transform duration-300`} />
                                {/* Luz o glow debajo del icono */}
                                {/* <div className="absolute bottom-[-8px] w-12 h-2 rounded-full bg-white opacity-0 blur-md group-hover:opacity-80 transition-all duration-300" /> */}
                            </div>
                            <span className="mt-2 text-white font-medium">{contact.name}</span>
                        </motion.a>
                    );
                })}
            </div>
        </section>
    );
};

export default Contact;
