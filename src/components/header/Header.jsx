import React from 'react';
import './Header.css';
import { HashLink } from 'react-router-hash-link';

const Header = ( {open, setOpen, isOpen, isDown, motion, headerVariants}) => {

    const linksData = [
        { name: "Home", path: "#"},
        { name: "About", path: "#about"},
        { name: "Tools", path: "#tools"},
        { name: "Projects", path: "#projects"},
        { name: "Contact", path: "#contact"}
    ];

    const onClickHandler = () => { //Close the menu when clicking an option 
        setOpen(false);
    }


    return (
        <motion.nav className={`nav-bar ${isDown}`} 
        initial='hidden'
        animate='visible'
        transition='duration' 
        variants={headerVariants}
        >
            <ul className={`nav-links ${isOpen}`}>
                {linksData.map(({name, path}, index) => {
                    return (
                    <li key={index}>
                        <HashLink smooth to={path} onClick={onClickHandler}>
                            <div className='underline-effect'>
                                {name}
                            </div>
                            </HashLink>
                    </li>
                    )
                })}
            </ul>
            <div className='burger-menu'>
                <i onClick={() => setOpen(!open)} className="fas fa-bars"></i>
            </div>
        </motion.nav>
    );
};

export default Header; 