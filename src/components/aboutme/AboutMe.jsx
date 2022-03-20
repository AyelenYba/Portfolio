import React from 'react';
import './AboutMe.css';

const AboutMe = ({ motion, variants }) => {
    return (
        <motion.section 
        id='about'
        className='aboutme-container' 
        initial='hidden' 
        transition='duration'  
        viewport={{ once: true }}  
        whileInView='visible'
        variants={variants}
        >
            <div>
                <h3>About Me</h3>
            </div>
            <div className='aboutme-info'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo minus perspiciatis sunt nesciunt officia facere dolore. Animi id error consequuntur voluptatibus aperiam veniam possimus, officiis, perferendis tenetur nesciunt voluptates.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt illo minus perspiciatis sunt nesciunt officia facere dolore. Animi id error consequuntur voluptatibus aperiam veniam possimus, officiis, perferendis tenetur nesciunt voluptates.
                </p>
            </div>
        </motion.section>
    );
};

export default AboutMe;