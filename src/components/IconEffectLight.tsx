import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as LiaIcons from "react-icons/lia";
import * as RiIcons from "react-icons/ri";

type IconSets = typeof FaIcons & typeof SiIcons & typeof DiIcons & typeof LiaIcons & typeof RiIcons;
interface IconEffectLightProps {
    iconName: keyof IconSets;
    size?: number;
    color?: string;
}

export default function IconEffectLight({ iconName, size = 50, color = "text-cyan-400" }: IconEffectLightProps) {
    const allIcons: IconSets = { ...FaIcons, ...SiIcons, ...DiIcons, ...LiaIcons, ...RiIcons };
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
