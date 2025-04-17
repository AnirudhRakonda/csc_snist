import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSendMail = (e) => {
        e.preventDefault();
        alert(`Message sent: ${message}`);
        setMessage('');
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
