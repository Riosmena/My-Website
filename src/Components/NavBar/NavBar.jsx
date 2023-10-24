import { useState } from "react"
import { NavLink } from "react-router-dom"
import { MdClose, MdMenu } from "react-icons/md"
import { SidebarData } from "../../Assets/Data/SidebarData"
import { NavStyles } from "./styles"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavStyles>
            <div
                className="mobile-menu-icon"
                onClick={toggle}
                role="button"
                tabIndex={0}
                onKeyDown={toggle}
            >
                <MdMenu />
            </div>

            <ul className={isOpen ? "navItems hide-item" : "navItems"}>
                <div
                    className="closeNavIcon"
                    onClick={toggle}
                    role="button"
                    tabIndex={0}
                    onKeyDown={toggle}
                >
                    <MdClose />
                </div>
                {SidebarData.map((item, index) => (
                    <li key={index}>
                        <NavLink to={item.path} activeClassName="active">
                            {item.icon}
                            <span>{item.title}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </NavStyles>
    )
}

export default NavBar