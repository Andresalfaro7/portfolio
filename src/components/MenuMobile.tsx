import { Link, useLocation } from 'react-router-dom';
import { HiMiniBriefcase } from "react-icons/hi2";
import { BiHomeSmile } from "react-icons/bi";
import { FaCubesStacked } from "react-icons/fa6";
import { TbMessageUser } from "react-icons/tb";
import { useState } from 'react';


const MenuMobile = () => {
    const location = useLocation();
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const handleCheckboxChange = () => setIsChecked(!isChecked);

    const isHome = location.pathname === "/";

    const handleButtonClick = () => {
        if (isChecked) {
            setIsChecked(false);
        }
    };

    return (
        <nav className={`${isHome ? "md:hidden" : "block"} menu`}>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} className="menu-open" name="menu-open" id="menu-open" />
            <label className="menu-open-button" htmlFor="menu-open">
                <span className="lines line-1"></span>
                <span className="lines line-2"></span>
                <span className="lines line-3"></span>
            </label>

            <Link onClick={handleButtonClick} to={'/'} className="menu-item blue"><BiHomeSmile /></Link>
            <Link onClick={handleButtonClick} to={'/proyectos'} className="menu-item green"><HiMiniBriefcase /></Link>
            <Link onClick={handleButtonClick} to={'/stack'} className="menu-item red"><FaCubesStacked /></Link>
            <Link onClick={handleButtonClick} to={'/contactos'} className="menu-item purple"><TbMessageUser /></Link>
        </nav>
    )
}

export default MenuMobile;