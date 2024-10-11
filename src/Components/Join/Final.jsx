import React, { useState } from 'react';
import qrCodeImage from '/qrcode.jpg'; // Replace with your actual QR code image path

function Final() {
  const [isQRCodeVisible, setIsQRCodeVisible] = useState(false);

  const handleContributeClick = () => {
    setIsQRCodeVisible(true);
  };

  const handleCloseQRCode = () => {
    setIsQRCodeVisible(false);
  };

  return (
    <div className="mt-20 text-center">
      <h1 className="text-4xl text-[#8b4513] font-medium uppercase tracking-[0.4rem] max-w-4xl mx-auto">
        Join Us in Making a Lasting Impact!
      </h1>
      <p className="max-w-4xl mx-auto mt-5 text-xl font-medium">
        Every contribution matters. As we continue our mission to uplift communities and provide essential resources, we invite you to be a part of this transformative journey.
      </p>
      <p className="text-xl font-medium mt-5 uppercase tracking-[0.4rem] max-w-4xl mx-auto">
        Together, we can make a difference.
      </p>
      <p className="max-w-4xl mx-auto mt-10 text-lg font-medium">
        <button 
          onClick={handleContributeClick}
          className="bg-[#8b4513] text-white p-2 pl-4 pr-4 rounded-3xl"
        >
          Contribute
        </button>
      </p>

      {/* QR Code Popup */}
      {isQRCodeVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative max-w-xs p-8 mx-auto bg-white rounded-lg shadow-lg">
            <button
              onClick={handleCloseQRCode}
              className="absolute text-2xl text-gray-600 top-2 right-2"
            >
              ×
            </button>
            <h2 className="mb-4 text-lg font-semibold text-center">Scan to Donate</h2>
            <img src={qrCodeImage} alt="QR Code" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Final;
