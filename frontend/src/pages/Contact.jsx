import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSendMail = () => {
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
                <textarea
                    className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    onClick={handleSendMail}
                >
                    Send Mail
                </button>
            </div>
        </div>
    );
};

export default Contact;
