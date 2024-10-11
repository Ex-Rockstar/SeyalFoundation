import React, { useState, useEffect } from 'react';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import qrCodeImage from '/qrcode.jpg'; // QR code image
import CloseIcon from '@mui/icons-material/Close'; // Import the close icon

const images = [img1, img2, img3, img4];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showQrCode, setShowQrCode] = useState(false); // State to manage QR code visibility

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const toggleQrCode = () => {
        setShowQrCode(!showQrCode); // Toggle the QR code modal
    };

    return (
        <div className="relative h-screen overflow-hidden">
            <div
                className="absolute inset-0 transition-all duration-1000 ease-in-out bg-center bg-cover"
                style={{ backgroundImage: `url(${images[currentImageIndex]})`, filter: 'brightness(40%)' }} // Dim background image
            />
            <div className="relative flex flex-col items-center justify-center w-full h-full px-4 text-center">
                <div className="w-full max-w-3xl mx-auto mt-12"> {/* Increased width and margin-top */}
                    <h1 className="mb-4 text-4xl font-bold tracking-widest text-white uppercase md:text-5xl lg:text-6xl">
                        Igniting Hope, Building Tomorrow
                    </h1>
                    <p className="mb-8 text-lg text-white md:text-xl lg:text-xl">
                        Seyal Foundation is dedicated to empowering marginalized communities through education, healthcare, and sustainable development.
                    </p>
                    <a href="#explore" className="px-8 py-4 mb-2 text-lg tracking-widest text-white uppercase transition-colors duration-300 rounded-full bg-primary hover:bg-primary-dark">
                        Join us in creating a brighter future.
                    </a>
                    <br></br>
                    <br></br>
                    <button 
                        className="font-medium text-white bg-[#8b4513] mt-5 p-2 pl-4 pr-4 rounded-3xl hover:bg-opacity-70 tracking-widest"
                        onClick={toggleQrCode} // Trigger QR code modal
                    >
                        DONATE NOW
                    </button>
                </div>
            </div>
            
            {/* QR Code Modal */}
            {showQrCode && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative w-1/2 max-w-xl p-10 text-center bg-white rounded-lg shadow-lg">
                        {/* Close Icon */}
                        <button className="absolute top-4 right-4" onClick={toggleQrCode}>
                            <CloseIcon className="text-gray-700 hover:text-gray-900" fontSize="large" />
                        </button>
                        <h2 className="mb-6 text-2xl font-semibold">Scan the QR Code to Donate</h2>
                        <img src={qrCodeImage} alt="QR Code" className="mx-auto mb-6 w-72 h-72" /> {/* QR code image */}
                        <button
                            className="px-6 py-3 text-lg text-white bg-red-600 rounded-lg hover:bg-red-700"
                            onClick={toggleQrCode} // Close modal on click
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Hero;
