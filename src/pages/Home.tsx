import { Link } from "react-router-dom";
import AnimationTextOne from "../components/AnimationTextOne";
import SlideInText from "../components/SlideInText";
import ComputerAnimation from "../components/ComputerAnimation";
import { motion } from "framer-motion";


const Home = () => {
    return (
        <div className="flex h-screen items-center p-10">
            <section className="hidden md:block md:w-1/3">
                <nav className="text-3xl">
                    <li className="w-fit"><Link to={'/'}><SlideInText text="Home" delay={0} /></Link></li>
                    <li className="w-fit"><Link to={'/proyectos'}><SlideInText text="Proyectos" delay={100} /></Link></li>
                    <li className="w-fit"><Link to={'/stack'}><SlideInText text="Stack" delay={200} /></Link></li>
                    <li className="w-fit"><Link to={'/contactos'}><SlideInText text="Contactos" delay={300} /></Link></li>
                </nav>
            </section>
            <section className="w-full md:w-2/3 relative">
                <div className="hidden md:block absolute w-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 xl:p-5">
                    <ComputerAnimation width="100%" height="100%" />
                </div>
                <motion.div
                    className="flex flex-col items-center text-center relative z-10 md:px-14 lg:px-28 xl:px-36 md:pb-20 xl:pb-28 "
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="md:h-20 lg:h-28 xl:h-36"><AnimationTextOne text="Andrés A." speed={150} /></h1>
                    <h3><AnimationTextOne text="Fullstack Developer" speed={175} /></h3>
                    <p className="text-center"><AnimationTextOne text="Apasionado por la tecnología y el desarrollo de soluciones innovadoras." speed={150} /></p>
                </motion.div>
            </section>
        </div>
    )
}

export default Home;