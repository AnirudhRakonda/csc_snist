import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assests/img.png';
import payment from '../assests/payment.jpeg';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        branch: '',
        rollNo: '',
        year: '',
        transactionId: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            console.log('Form data:', formData);
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            const data = await response.json();
            console.log('Signup successful:', data);
            navigate('/');
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div style={{ marginTop: '8vh', marginBottom: '8vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
            <form onSubmit={handleSignup} style={{ width: '700px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#1a1a1a' }}>
                <h2 style={{ marginBottom : '6vh', color: '#28a745', textAlign: 'center' }}>Sign Up</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {['name', 'username', 'email', 'password', 'rollNo', 'transactionId'].map((field) => (
                        <div key={field} style={{ flex: '1 1 calc(50% - 15px)', marginBottom: '15px' }}>
                            <label htmlFor={field} style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>
                                {field.charAt(0).toUpperCase() + field.slice(1)}
                            </label>
                            <input
                                type={field === 'password' ? 'password' : 'text'}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                                required
                            />
                        </div>
                    ))}
                    <div style={{ flex: '1 1 calc(50% - 15px)', marginBottom: '15px' }}>
                        <label htmlFor="branch" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Branch</label>
                        <select
                            id="branch"
                            name="branch"
                            value={formData.branch}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                            required
                        >
                            <option value="" disabled>Select Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="CSE-AI">CSE-AI</option>
                            <option value="CSE-DS">CSE-DS</option>
                            <option value="CSE-CS">CSE-CS</option>
                            <option value="CSE-IOT">CSE-IOT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                            <option value="CIVIL">CIVIL</option>
                        </select>
                    </div>
                    <div style={{ flex: '1 1 calc(50% - 15px)', marginBottom: '15px' }}>
                        <label htmlFor="year" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Year</label>
                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                            required
                        >
                            <option value="" disabled>Select Year</option>
                            <option value="1">1st Year</option>
                            <option value="2">2nd Year</option>
                            <option value="3">3rd Year</option>
                            <option value="4">4th Year</option>
                        </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', marginBottom: '15px' }}>
                        <img src={payment} alt="Signup Illustration" style={{ maxWidth: '40%', height: 'auto' }} />
                    </div>
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;