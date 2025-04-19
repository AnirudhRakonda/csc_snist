import React, { useState, useEffect } from 'react';
import img2 from '../assests/cyberstrike.png';
import img3 from '../assests/cybertron.png';
import img4 from '../assests/workshop.png';

const images = [
    {
        src: img2,
        description: '9 hour ctf hackathon event.',
    },
    {
        src: img3,
        description: '5 day workshop on cyber security.',
    },
    {
        src: img4,
        description: 'Workshop on advanced cybersecurity.',
    },
];

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); 
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div style={{ textAlign: 'center', margin: '4rem auto 0' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={images[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{
                        width: '60%',
                        height: 'auto',
                        borderRadius: '15px', // Rounded edges
                        margin: '0 auto', // Center the image
                    }}
                />
                <button
                    onClick={goToPrevious}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                >
                    &#8249;
                </button>
                <button
                    onClick={goToNext}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                >
                    &#8250;
                </button>
            </div>
            <p
                style={{
                    marginTop: '10px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light background for text
                    padding: '10px',
                    borderRadius: '10px',
                    display: 'inline-block',
                }}
            >
                {images[currentIndex].description}
            </p>
        </div>
    );
};
export default Events;