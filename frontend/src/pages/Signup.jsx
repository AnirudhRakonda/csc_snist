import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        branch: '',
        rollNo: '',
        year: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
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
            // Handle successful signup (e.g., redirect to login page)
        } catch (error) {
            console.error('Error during signup:', error);
            // Handle signup error (e.g., show error message)
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
            <form onSubmit={handleSignup} style={{ width: '700px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#1a1a1a' }}>
                <h2 style={{ color: '#28a745', textAlign: 'center' }}>Sign Up</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {['name', 'username', 'email', 'password', 'branch', 'rollNo', 'year'].map((field, index) => (
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
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;