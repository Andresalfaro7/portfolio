import AnimationTextOne from "../components/AnimationTextOne";
import Card from "../components/CardCustom";
import dataProjects from '../data/dataProjects.json';

const Projects = () => {
    return (
        <div className="">
            <h1 className="text-center p-8"><AnimationTextOne text="Proyectos" speed={100} /></h1>
            <div className="px-10 xl:px-20 py-4 sm:py-12 md:py-24 lg:py-24 xl:py-32 lg:-ml-4 xl:ml-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 xl:gap-x-0 gap-y-24 md:gap-y-72 justify-between">
                {dataProjects.projects.map((project) => (
                    <div key={project.id} className="">
                        <Card image={project.image} title={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;