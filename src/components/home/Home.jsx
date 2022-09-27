import React from 'react';

import SocialMediaBtns from './socialmediabtns/SocialMediaBtns';
import ChevronDown from './chevrondown/ChevronDown';
import resume from '../../assets/pdf/CV-AYELÉN YBAÑEZ.pdf';
import pusheen from '../../assets/imagesSrc/pusheen.png';
import './Home.css';

const Home = ({ isChevronHide, motion, variants, itemsVariants }) => {

    const socialMediaData = [
        {name: 'linkedin', url: 'https://www.linkedin.com/in/ayelenybanez/', iconClass: 'fab fa-linkedin-in'},
        {name: 'github', url: 'https://github.com/AyelenYba', iconClass: 'fab fa-github'},
        {name: 'instagram', url: 'https://www.instagram.com/aye.ybanez/', iconClass: 'fab fa-instagram '}
    ];

    return (
        <section id='home'>
            <div className='home-container'>
                <motion.div 
                className='home-content'
                initial='hidden' 
                transition='duration'  
                viewport={{ once: true }}  
                whileInView='visible'
                variants={variants}
                >
                    <div className='main-info-img'>
                        <div className='main-info'>
                            <h1>
                                Hi! 
                                <br/>
                                I'm Ayelén Ybañez
                            </h1>
                            <h2>Front end developer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel arcu magna.  </p>
                        </div>
                        <img src={pusheen} alt=""></img>
                    </div>
                    <div className='cv-socialmedia'>
                        <a id='resume' href={resume} target="_blank" rel="noreferrer">Resume</a>
                        <SocialMediaBtns 
                        socialMediaData={socialMediaData} 
                        itemsVariants={itemsVariants}
                        motion={motion}
                        />
                    </div>
                </motion.div>
                <ChevronDown isChevronHide={isChevronHide}/>
            </div>
        </section>
    )
}

export default Home;