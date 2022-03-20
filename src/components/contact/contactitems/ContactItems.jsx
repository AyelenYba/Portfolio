import React from "react";
import './ContactItems.css';

const ContactItems = ( {contactData}) => {

    return (
        contactData.map(item => {
            return(
                <div className='contact-item' key={item.name}>
                    <div className='contact-item-icon'>
                        <i className={item.iconClass}></i>
                    </div>
                    <div className='contact-item-content'>
                    {item.content}
                    </div>
                </div>
        )})
    )
}

export default ContactItems;