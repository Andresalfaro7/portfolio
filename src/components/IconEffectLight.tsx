import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

type IconSets = typeof FaIcons & typeof SiIcons & typeof DiIcons;

interface IconEffectLightProps {
    iconName: keyof IconSets;
    size?: number;
    color?: string;
}

export default function IconEffectLight({ iconName, size = 50, color = "text-cyan-400" }: IconEffectLightProps) {
    const allIcons: IconSets = { ...FaIcons, ...SiIcons, ...DiIcons };
    const IconComponent = allIcons[iconName];

    if (!IconComponent) {
        return null;
    }

    return (
        <div className="flex items-center justify-center bg-gray-900">
            <div className="group relative">
                <IconComponent size={size} className={`text-7xl ${color} transition-transform duration-500 group-hover:scale-110`} />
            </div>
        </div>
    );
}
