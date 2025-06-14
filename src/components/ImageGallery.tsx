import React, { useState } from 'react';

type ImageGalleryProps = {
  images: string[];
  altText?: string;
};

const ImageGallery = ({ images, altText = 'Projet' }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Image principale */}
      <img
        src={images[selectedIndex]}
        alt={`${altText} ${selectedIndex + 1}`}
        className="w-full h-60 rounded-lg object-cover"
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
  );
};

export default ImageGallery;
