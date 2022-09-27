import React from 'react';
import './Card.css';

const Card = ({ name, url, description, img, github, tools }) => {
    
    return (
        <div className='project-container'>
            <img className={`${name} project-img`} src={img} alt={name}></img>
            <div className='project-overlay'>
                <p className='description'>{description}</p>
                <div className='tools-used'>
                    {tools.map((tool, i) => {
                        const {name, iconClass, id} = tool;
                        return (
                            <div className='tool' key={i}> 
                                <div> 
                                <i className={`${iconClass} ${id}`}></i>
                                <p>{name}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='project-btns'>
                    <a href={url} target="_blank" rel="noreferrer">View Live</a>
                    <a href={github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>   
        </div>
    )
}

export default Card;