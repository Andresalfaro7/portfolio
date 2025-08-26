import Card from "../components/CardCustom";
import dataProjects from '../data/dataProjects.json';

const Projects = () => {
    return (
        <div className="">
            <h1>Proyectos</h1>
            <div className="px-5 xl:px-20 py-28 sm:py-12 md:py-24 lg:py-24 xl:py-32 lg:ml-14 xl:ml-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-72 justify-between">
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