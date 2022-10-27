import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

interface NavbarProps {
    links: {
        name: string;
        path: string;
    }[];
}

const Navbar = ({ links }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <ul className={isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        {links.map(({ name, path }) => (
                            <NavLink
                                key={name}
                                to={path}
                                className={({ isActive }) =>
                                    isActive ? 'navbar__link--active' : undefined
                                }
                            >
                                {name}
                            </NavLink>
                        ))}
                    </ul>
                    <div
                        className={`nav-btn ${isOpen ? 'change' : ''} `}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="navbar__icon bar1"></div>
                        <div className="navbar__icon bar2"></div>
                        <div className="navbar__icon bar3"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;