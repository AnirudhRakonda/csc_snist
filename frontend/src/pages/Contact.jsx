import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');

    const handleSendMail = (e) => {
        e.preventDefault();
        alert(`Message sent: ${message}`);
        setMessage('');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
            <form onSubmit={handleSendMail} style={{ width: '700px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#1a1a1a' }}>
                <h2 style={{ color: '#28a745', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{
                            width: '100%',
                            height: '150px',
                            padding: '8px',
                            boxSizing: 'border-box',
                            backgroundColor: '#333',
                            color: '#fff',
                            border: '1px solid #555',
                            resize: 'none',
                        }}
                        placeholder="Write your message here..."
                        required
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Send Mail
                </button>
            </form>
        </div>
    );
};

export default Contact;
