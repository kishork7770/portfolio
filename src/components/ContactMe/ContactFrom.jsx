import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { useState } from 'react';

export const ContactFrom = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y94l8v6', 'template_u67r6sw', form.current, {
                publicKey: 'BBcD4PPlN9B3KVha-',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setSuccess('Email sent successfully !')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div>
            <p className='text-cyan'>{success}</p>
            <form className='flex flex-col gap-4 text-white' ref={form} onSubmit={sendEmail}>
                <input name='from_name' value={name} onChange={handleName} type="text" placeholder='Your Name' required className='h-12 rounded-lg bg-gray-400 px-2' />
                <input name='from_email' value={email} onChange={handleEmail} type="email" placeholder='Your Email' required className='h-12 rounded-lg bg-gray-400 px-2' />
                <textarea name='message' value={message} onChange={handleMessage} placeholder='Message' rows="9" cols="50" required className=' rounded-lg bg-gray-400 p-2'></textarea>
                <button type='submit' className='w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-cyan  bg-cyan transition-all duration-500 '>Send</button>
            </form>
        </div>
    )
}
