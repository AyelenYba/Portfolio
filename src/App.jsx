import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { motion } from "framer-motion";

import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Tools from './components/tools/Tools';
import AboutMe from './components/aboutme/AboutMe';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import NotFound from './components/NotFound';
import { variantsData } from './components/variantsData';

const App = () => {
    const [open, setOpen] = useState(false); //Open or close burger Menu
    const [navDown, setNavDown] = useState(false); //active nav's background
    const [chevronHide, setChevronHide] = useState(false);

    //Active nav's background when scrolling
    const activeBackground = () => {
        if(window.scrollY >= 30) {
            setNavDown(true);
        }
        else {
            setNavDown(false);
        }
    };

    //Hide chevron down
    const hideChevronDown = () => {
        if(window.scrollY >= 40) {
            setChevronHide(true);
        }
        else {
            setChevronHide(false);
        }
    }
    
    window.addEventListener('scroll', () => {
        activeBackground()
        hideChevronDown()
    });

    const isDown = navDown ? 'active' : '';
    const isOpen = open ? 'menu-active' : '';
    const isChevronHide = chevronHide ? 'hidden-chevron' : ''; 

    //variants for animation 
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={
                    <>
                    <Header 
                    open={open} 
                    setOpen={setOpen} 
                    isOpen={isOpen} 
                    isDown={isDown} 
                    motion={motion}
                    headerVariants={variantsData.headerVariants}
                    />
                    <Home 
                    isChevronHide={isChevronHide} 
                    motion={motion} 
                    variants={variantsData.generalVariants}
                    itemsVariants={variantsData.itemsVariants}
                    />
                    <AboutMe motion={motion} variants={variantsData.generalVariants}/>
                    <Tools motion={motion} variants={variantsData.generalVariants} itemsVariants={variantsData.itemsVariants}/>
                    <Projects motion={motion} variants={variantsData.generalVariants}/>
                    <Contact motion={motion} variants={variantsData.generalVariants}/>
                    <Footer />
                    </>
                    }
                />
                <Route path="*" element={<NotFound />}/>
            </Routes>
        </Router>
    );
}

export default App;