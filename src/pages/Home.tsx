import AnimationTextOne from "../components/AnimationTextOne";
import SlideInText from "../components/SlideInText";

const Home = () => {
    return (
        <div className="flex h-screen items-center p-10">
            <div className="w-1/2">
                <nav className="text-3xl">
                    <li className="w-fit"><SlideInText text="Inicio" delay={0}/></li>
                    <li className="w-fit"><SlideInText text="Proyectos" delay={100}/></li>
                    <li className="w-fit"><SlideInText text="Stack" delay={200}/></li>
                    <li className="w-fit"><SlideInText text="Contactos" delay={300}/></li>
                </nav>
            </div>
            <div className="w-1/2">
                <h1 className="h-28"><AnimationTextOne text="Andrés A." speed={100} /></h1>
                <h3><AnimationTextOne text="Fullstack Developer" speed={100} /></h3>
                <p><AnimationTextOne text="Apasionado por la tecnología y el desarrollo de soluciones innovadoras." speed={50} /></p>
            </div>
            {/* <div className="flex items-center justify-center min-h-screen bg-gray-900">
                <h1 className="text-3xl font-bold text-white">
                    <AnimationTextOne text="Hola, soy un texto animado con React y Tailwind 🚀" speed={80} />
                </h1>
            </div> */}
        </div>
    )
}

export default Home;