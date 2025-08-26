import IconEffectLight from "../components/IconEffectLight";
import technologies from "../data/dataStack.json";

interface TechItem {
    id: number;
    icon: keyof typeof import("react-icons/fa") | keyof typeof import("react-icons/si") | keyof typeof import("react-icons/di");
    name: string;
    color: string;
}

const Stack = () => {
    const techItems: TechItem[] = technologies.map(item => ({
        ...item,
        icon: item.icon as TechItem["icon"],
    }));
    return (
        <div>
            <div className="text-center py-7 lg:py-10">
                <h1>Stack</h1>
                <p className="text-center">Aquí se muestra la información sobre mi stack tecnológico.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-10">
                {techItems.map(({ icon, name, color }, key) => (
                    <div key={key} className="flex flex-col items-center">
                        <IconEffectLight iconName={icon} size={60} color={color} />
                        <h5 className="p-8 text-center text-white">{name}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stack;
