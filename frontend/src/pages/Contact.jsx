import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSendMail = (e) => {
        e.preventDefault();

        emailjs.send(
            'your_service_id',       // Replace with your EmailJS service ID
            'your_template_id',      // Replace with your EmailJS template ID
            { message },
            'your_user_id_or_public_key'  // Replace with your EmailJS public key
        ).then((response) => {
            alert('Message sent successfully!');
            setMessage('');
        }).catch((error) => {
            alert('Failed to send message:', error);
        });
    };

    return (
        <div className="flex justify-center items-center h-[50vh] bg-background">
            <form onSubmit={handleSendMail} className="w-[700px] p-5 border border-gray-300 rounded bg-[#1a1a1a]">
                <h2 className="text-cta text-center mb-5">Contact Us</h2>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 text-text">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full h-[150px] p-2 box-border bg-[#333] text-text border border-gray-500 resize-none"
                        placeholder="Write your message here..."
                        required
                    />
                </div>
                <button type="submit" className="w-full p-2 bg-cta text-background border-none rounded">
                    Send Mail
                </button>
            </form>
        </div>
    );
};

export default Contact;
