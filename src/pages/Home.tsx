import { Link } from "react-router-dom";
import AnimationTextOne from "../components/AnimationTextOne";
import SlideInText from "../components/SlideInText";

const Home = () => {
    return (
        <div className="flex h-screen items-center p-10">
            <div className="hidden md:block md:w-1/2">
                <nav className="text-3xl">
                    <li className="w-fit"><Link to={'/'}><SlideInText text="Home" delay={0}/></Link></li>
                    <li className="w-fit"><Link to={'/proyectos'}><SlideInText text="Proyectos" delay={100}/></Link></li>
                    <li className="w-fit"><Link to={'/stack'}><SlideInText text="Stack" delay={200}/></Link></li>
                    <li className="w-fit"><Link to={'/contactos'}><SlideInText text="Contactos" delay={300}/></Link></li>
                </nav>
            </div>
            <div className="w-full md:w-1/2">
                <h1 className="md:h-20 lg:h-28 xl:h-36"><AnimationTextOne text="Andrés A." speed={100} /></h1>
                <h3><AnimationTextOne text="Fullstack Developer" speed={100} /></h3>
                <p><AnimationTextOne text="Apasionado por la tecnología y el desarrollo de soluciones innovadoras." speed={50} /></p>
            </div>
        </div>
    )
}

export default Home;