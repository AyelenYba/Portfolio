import React from 'react';
import ContactForm from './contactForm/ContactForm';
import ContactItems from './contactitems/ContactItems';
import './Contact.css';

const Contact = ({ motion, variants }) => {

    const contactData = [
        {name: 'location', iconClass: 'fas fa-map-marker-alt', content:'Buenos Aires, Argentina'},
        {name: 'mail', iconClass: 'fas fa-envelope', content: 'ayelen.ybanez@gmail.com'},
        {name:'telephone', iconClass: 'fas fa-phone-alt', content: '+541141564115'}
    ];

    return (
        <motion.section 
        id='contact' 
        className='contact-container'
        initial='hidden' 
        transition='duration'  
        viewport={{ once: true }}  
        whileInView='visible'
        variants={variants}
        >
            <h1>Get In Touch</h1>
            <div className='contact-info-form-container'>
                <div className='contact-info'>
                    <div className='contact-items'>
                        <ContactItems contactData={contactData} />
                    </div>
                </div>
                <div className='contact-form'>
                    <ContactForm />
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;