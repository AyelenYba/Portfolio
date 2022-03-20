import React from 'react';
import './SocialMediaBtns.css';

const SocialMediaBtns = ({socialMediaData, motion, itemsVariants}) => {
    return (
        <ul className='socialmedia-list'>
            {socialMediaData.map((sm, i) => {
                return(
                    <motion.li 
                    key={sm.name} 
                    custom={i} 
                    initial='offscreen' 
                    whileInView='onscreen' 
                    variants={itemsVariants} 
                    viewport={{ once: true }}
                    >
                        <a href={sm.url} target="_blank" rel="noreferrer">
                            <i className={sm.iconClass}></i>
                        </a>
                    </motion.li>
                )
            })}
        </ul>
    )
};

export default SocialMediaBtns;