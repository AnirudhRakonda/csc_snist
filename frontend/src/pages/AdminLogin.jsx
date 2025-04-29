import React, { useState } from 'react';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/adminlogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login successful:', data);
            
            // Handle successful login (e.g., save token, redirect)
        } catch (error) {
            console.error('Error during login:', error);
            // Handle login error (e.g., show error message)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        // Add your login logic here
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#000' }}>
            <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#1a1a1a' }}>
                <h2 style={{ color: '#28a745' }}>Login</h2>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                        required
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                        required
                    />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px' }}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;