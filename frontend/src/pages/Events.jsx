import React, { useState, useEffect } from 'react';

const images = [
    {
        src: 'https://via.placeholder.com/800x400?text=Image+1',
        description: 'This is the first image description.',
    },
    {
        src: 'https://via.placeholder.com/800x400?text=Image+2',
        description: 'This is the second image description.',
    },
    {
        src: 'https://via.placeholder.com/800x400?text=Image+3',
        description: 'This is the third image description.',
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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'relative' }}>
                <img
                    src={images[currentIndex].src}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{ width: '100%', borderRadius: '8px' }}
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
            <p style={{ marginTop: '10px', fontSize: '16px', color: '#555' }}>
                {images[currentIndex].description}
            </p>
        </div>
    );
};

export default Events;