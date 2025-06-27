import { useState } from 'react';
import { createPortal } from 'react-dom';


type ImageGalleryProps = {
  images: string[];
  altText?: string;
};

const ImageGallery = ({ images, altText = 'Projet' }: ImageGalleryProps) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openZoom = () => {
    setZoomed(true);
  };

  const closeZoom = () => {
    setIsClosing(true);
    // Attendre que l'animation de fermeture se termine (300ms) avant de démonter
    setTimeout(() => {
      setZoomed(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
    <div className="flex flex-col gap-4">
      {/* Image principale */}
      <img
        src={images[selectedIndex]}
        alt={`${altText} ${selectedIndex + 1}`}
        className="w-full h-60 rounded-lg object-cover cursor-zoom-in"
        onClick={openZoom}
      />

      {/* Miniatures */}
      <div className="flex gap-2 justify-center">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`h-16 w-24 rounded overflow-hidden border-2 ${
              index === selectedIndex ? 'border-primary' : 'border-transparent'
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
          className={`fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          onClick={closeZoom}
        >
          <img
            src={images[selectedIndex]}
            alt={`${altText} zoom`}
            className={`max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg cursor-zoom-out transform ${isClosing ? 'animate-zoomOut' : 'animate-zoomIn'}`}
          />
        </div>,
        document.getElementById('modal-root') || document.body
      )}
    </>
  );
};

export default ImageGallery;
