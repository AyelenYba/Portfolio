import React from 'react';
import './Tools.css';

const Tools = ({ motion, itemsVariants, variants }) => {
    const toolsData = [
        {name: 'html', iconClass: 'fab fa-html5', content: 'HTML'},
        {name: 'css', iconClass: 'fab fa-css3-alt', content: 'CSS'},
        {name:'javascript', iconClass: 'fab fa-js-square', content: 'JavaScript'},
        {name:'react', iconClass: 'fab fa-react', content: 'React'},
        {name:'github', iconClass: 'fab fa-github', content: 'GitHub'}
    ];

    return (
        <motion.section 
        id='tools'
        initial='hidden' 
        transition='duration'  
        viewport={{ once: true }}  
        whileInView='visible'
        variants={variants}>
            <div>
            <h1>Tools</h1>
            </div>
            <div className='tools-container'>
            {toolsData.map((tool, i) => {
                return (
                    <motion.div 
                    id={tool.name}
                    className='tool' 
                    key={tool.name} 
                    custom={i} 
                    initial='offscreen' 
                    whileInView='onscreen' 
                    variants={itemsVariants} 
                    viewport={{ once: true }}
                    >
                            <i className={tool.iconClass}></i>
                            <span className='tool-name'>{tool.content}</span>
                    </motion.div>
                )
            })}
            </div>
        </motion.section>
    );
};

export default Tools;