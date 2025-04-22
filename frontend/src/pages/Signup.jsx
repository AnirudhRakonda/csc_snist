import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    });
    const [transactionImage, setTransactionImage] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Fix for API URL to work in both development and production
    const apiBaseUrl = window.location.origin; // This will get the base URL of your current deployment
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setTransactionImage(e.target.files[0]);
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        
        try {
            // Create a new FormData instance
            const formDataToSend = new FormData();
            
            // Append all text fields
            Object.keys(formData).forEach(key => {
                formDataToSend.append(key, formData[key]);
            });
            
            // Append file separately
            if (transactionImage) {
                formDataToSend.append('transactionImage', transactionImage);
            }

            // Debug log
            console.log('Sending form data:');
            for (let [key, value] of formDataToSend.entries()) {
                console.log(`${key}:`, value instanceof File ? `File: ${value.name}` : value);
            }

            // Make the API request with the correct URL
            const response = await fetch(`${apiBaseUrl}/api/auth/register`, {
                method: 'POST',
                body: formDataToSend,
                // Do NOT set Content-Type header - browser handles it
            });

            // Parse the response
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.error || 'Registration failed');
            }

            console.log('Signup successful:', data);
            alert('Registration successful! You can now login.');
            navigate('/login');
        } catch (error) {
            console.error('Error during signup:', error);
            setError(error.message || 'Something went wrong during registration');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ marginTop: '8vh', marginBottom: '8vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
            <form onSubmit={handleSignup} style={{ width: '700px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#1a1a1a' }}>
                <h2 style={{ marginBottom: '6vh', color: '#28a745', textAlign: 'center' }}>Sign Up</h2>
                
                {error && (
                    <div style={{ padding: '10px', marginBottom: '15px', backgroundColor: '#dc3545', color: 'white', borderRadius: '5px', textAlign: 'center' }}>
                        {error}
                    </div>
                )}
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                    {['name', 'username', 'email', 'password', 'rollNo'].map((field) => (
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
                            style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                            required
                        >
                            <option value="" disabled>Select Branch</option>
                            {['CSE', 'IT', 'CSE-AI', 'CSE-DS', 'CSE-CS', 'CSE-IOT', 'ECE', 'EEE', 'MECH', 'CIVIL'].map((branch) => (
                                <option key={branch} value={branch}>{branch}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ flex: '1 1 calc(50% - 15px)', marginBottom: '15px' }}>
                        <label htmlFor="year" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Year</label>
                        <select
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                            required
                        >
                            <option value="" disabled>Select Year</option>
                            {[1, 2, 3, 4].map((yr) => (
                                <option key={yr} value={yr}>{yr} Year</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ flex: '1 1 calc(50% - 15px)', marginBottom: '15px' }}>
                        <label htmlFor="transactionImage" style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Payment Screenshot</label>
                        <input
                            type="file"
                            id="transactionImage"
                            name="transactionImage"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ width: '100%', padding: '8px', backgroundColor: '#333', color: '#fff', border: '1px solid #555' }}
                            required
                        />
                    </div>

                    <div style={{ width: '100%', textAlign: 'center', marginTop: '15px' }}>
                        <img src={payment} alt="Payment Screenshot Example" style={{ maxWidth: '40%', borderRadius: '10px' }} />
                    </div>
                </div>
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        marginTop: '20px', 
                        width: '100%', 
                        padding: '10px', 
                        backgroundColor: loading ? '#999' : '#28a745', 
                        color: '#fff', 
                        border: 'none', 
                        borderRadius: '5px',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
            </form>
        </div>
    );
};

export default Signup;