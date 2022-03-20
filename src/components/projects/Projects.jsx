import React from 'react';
import Card from './card/Card';
import './Projects.css';

const Projects = ({ motion, variants }) => {
    const projectsData = [
        {name: 'projectName1', img:'', url: '', github: '', tools:['1', '2', '3', '4']},
        {name: 'projectName2', img:'', url: '', github: '', tools:['1', '2', '3', '4']},
        {name: 'projectName3', img:'', url: '', github: '', tools:['1', '2', '3', '4']},
        {name: 'projectName4', img:'', url: '', github: '', tools:['1', '2', '3', '4']}
    ];

    const onMouseOverHandler = () => {
        return 'dsadas';
    }

    return (
        <motion.section 
        id="projects-container"
        initial='hidden' 
        transition='duration'  
        viewport={{ once: true }}  
        whileInView='visible'
        variants={variants}
        >
            <h1>Projects</h1>
            <div className='projects'>
                {projectsData.map(project => {
                    return (
                    <Card 
                    name={project.name} 
                    url={project.url} 
                    img={project.img} 
                    github={project.github} 
                    tools={project.tools}
                    key={project.name}
                    />
                    )
                })}
            </div>
        </motion.section>
    );
};

export default Projects;