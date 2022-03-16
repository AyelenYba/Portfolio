import React from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {

    // const [result, setResult] = useState(null);
    // const [error, setError] = useState(false);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_49tnpoh', 'template_wdzzroa', e.target, 'user_OOzVmPXF1x84tyAt0cfdf')
        .then((result) => {
            console.log(result.text);
            // setResult(true);
        }, (error) => {
            console.log(error.text);
            // SetError(true);
        });      
        e.target.reset();
    }

    return (
        <form onSubmit={onSubmitHandler} id='form-contact'>
            <label htmlFor='name' hidden>name</label>
            <input id='name' type='text' name='name' placeholder='Name' required/>
            <label htmlFor='user_email' hidden>email</label>
            <input id='email' type='text' name='user_email' placeholder='Email' required/>
            <label htmlFor='message' hidden>message</label>
            <textarea id='text-area' placeholder='Message' name='message' required></textarea>
            <input id='submit-button' type='submit' value='Send'></input>
            {/* {result && <span>dsajdasds</span>}  */}
            {/* {error & <span>dsajdasds</span>}  */}
        </form>
    )
}

export default ContactForm;