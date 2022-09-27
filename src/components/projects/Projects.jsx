import React from 'react';
import Card from './card/Card';
import './Projects.css';

const Projects = ({ motion, variants }) => {

    const projectsData = [
        {name: 'Menu App', description: 'A simple food menu made with React', img:'./images/projectsImgs/project2.png', url: 'https://project-0-3.netlify.app/', github: 'https://github.com/AyelenYba/Food-menu', 
        tools:[
            {
                id: 'html',
                name: 'HTML',
                iconClass: 'fab fa-html5',
            },
            {
                id: 'css',
                name: 'CSS',
                iconClass: 'fab fa-css3-alt',
            },
            {
                id: 'react',
                name: 'React',
                iconClass: 'fab fa-react',
            }
        ] 
        },
        {name: 'projectName2', img:'./images/projectsImgs/project2.png', url: '', github: '', tools:['1', '2', '3', '4']},
        {name: 'projectName3', img:'./images/projectsImgs/project2.png', url: '', github: '', tools:['1', '2', '3', '4']},
        {name: 'projectName4', img:'./images/projectsImgs/project2.png', url: '', github: '', tools:['1', '2', '3', '4']}
    ];

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
                    description={project.description}
                    />
                    )
                })}
            </div>
        </motion.section>
    );
};

export default Projects;