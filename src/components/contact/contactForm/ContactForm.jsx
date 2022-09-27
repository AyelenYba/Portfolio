import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const ContactForm = () => {

    const form = useRef();

    const sendMessage = () => {
        emailjs.sendForm('service_49tnpoh', 'template_wdzzroa', form.current, 'user_OOzVmPXF1x84tyAt0cfdf')
        .then((result) => {
            console.log(result);
            Swal.fire({
                title: 'Thank you!',
                text: 'Your message was successfully sent',
                icon: 'success',
                confirmButtonColor: '#9F5CF3',
                confirmButtonText: 'Ok'
            })
        }, (error) => {
            console.log(error.text);
        });      
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
        .min(3, 'Too Short!')
        .matches(/^[a-zA-ZáéíóúÁÉÍÓÚ ]+$/, 'Only letters allowed')
        .required('* The name is required'),
        user_email: Yup.string()
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
        .required('*The email is required'),
        message: Yup.string()
        .min(10, 'Too Short!')
        .required('* The message is required')
    })

    return (
        <Formik
        initialValues={{ name: "", user_email: "", message: "" }} 
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
            sendMessage();
            resetForm();
        }}
        >
            {( {values, errors, touched, handleChange, handleBlur, handleSubmit } ) => (
                <form onSubmit={handleSubmit} id='form-contact' ref={form}>
                    <label htmlFor='name' hidden>name</label>
                    <input 
                    id='name' 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name && errors.name ? "error" : null}
                    />
                    {touched.name && errors.name && <span className="error-message">{errors.name}</span>}
                    <label htmlFor='user_email' hidden>email</label>
                    <input
                    id='email' 
                    type='text' 
                    name='user_email' 
                    placeholder='Email' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.user_email}
                    className={touched.user_email && errors.user_email ? "error" : null}
                    />
                    {touched.user_email && errors.user_email && <span className="error-message">{errors.user_email}</span>}
                    <label htmlFor='message' hidden>message</label>
                    <textarea 
                    id='text-area' 
                    placeholder='Message' 
                    name='message' 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    className={touched.message && errors.message ? "error" : null}
                    >
                    {touched.message && errors.message && <span className="error-message">{errors.message}</span>}
                    </textarea>
                    <input id='submit-button' type='submit' value='Send'></input>
                </form>
                )}
        </Formik >
    )
}

export default ContactForm;