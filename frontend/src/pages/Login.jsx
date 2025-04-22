import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const apiBaseUrl = window.location.origin; // This will get the base URL of your current deployment
    // console.log(`API Base URL: ${apiBaseUrl}`);

    const handleLogin = async () => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
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
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="flex justify-center items-center h-screen bg-background">
            <form
                onSubmit={handleSubmit}
                className="w-72 p-5 border border-gray-600 rounded bg-background"
            >
                <h2 className="text-cta text-center mb-5">Login</h2>
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block mb-1 text-text"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 box-border bg-gray-800 text-text border border-gray-700 rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="password"
                        className="block mb-1 text-text"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 box-border bg-gray-800 text-text border border-gray-700 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-cta text-background border-none rounded"
                >
                    Login
                </button>
                <div className="mt-4 text-center text-text">
                    Don't have an account? 
                    <a
                        href="/signup"
                        className="text-cta hover:underline transition duration-200"
                    >
                        Sign Up
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
