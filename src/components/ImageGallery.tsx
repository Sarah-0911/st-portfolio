import React, { useState } from 'react';
import { createPortal } from 'react-dom';


type ImageGalleryProps = {
  images: string[];
  altText?: string;
};

const ImageGallery = ({ images, altText = 'Projet' }: ImageGalleryProps) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => setZoomed(!zoomed);

  return (
    <>
    <div className="flex flex-col gap-4">
      {/* Image principale */}
      <img
        src={images[selectedIndex]}
        alt={`${altText} ${selectedIndex + 1}`}
        className="w-full h-60 rounded-lg object-cover cursor-zoom-in"
        onClick={toggleZoom}
      />

      {/* Miniatures */}
      <div className="flex gap-2 justify-center">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`h-16 w-24 rounded overflow-hidden border ${
              index === selectedIndex ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={src}
              alt={`${altText} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>

    {/* Zoom Modal */}
    {zoomed &&
      createPortal(
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={toggleZoom}
        >
          <img
            src={images[selectedIndex]}
            alt={`${altText} zoom`}
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg cursor-zoom-out"
          />
        </div>,
        document.getElementById('modal-root') || document.body
      )}
    </>
  );
};

export default ImageGallery;
