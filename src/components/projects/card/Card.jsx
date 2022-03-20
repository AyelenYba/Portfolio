import React from 'react';
import './Card.css';

const Card = ({ name, url, img, github, tools }) => {
    return (
        <div className='project-container'>
            <div className={`${name} project-img`}>
                <img src={img} alt="" ></img>
            </div>
            <div className='project-info'>
                <div>
                    <h3>{name}</h3>
                </div>
                <div className='tools-used'>
                    <p>{tools[0]}</p>
                    <p>{tools[1]}</p>
                    <p>{tools[2]}</p>
                    <p>{tools[3]}</p>
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