const Home = () =>{
    return(
        <div className="flex h-screen items-center p-10 bg-primary-50">
            <div className="w-1/2">
                <nav className="text-3xl">
                    <li>Inicio</li>
                    <li>Proyectos</li>
                    <li>Stack</li>
                    <li>Contactos</li>
                </nav>
            </div>
            <div className="w-1/2">
                <h1>Andrés A.</h1>
                <h3>Fullstack Developer</h3>
                <p>Apasionado por la tecnología y el desarrollo de soluciones innovadoras.</p>
            </div>
        </div>
    )
}

export default Home;