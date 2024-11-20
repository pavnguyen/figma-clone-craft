import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`aspect-square bg-gray-100 rounded-lg overflow-hidden ${
              selectedImage === idx ? "ring-2 ring-black" : ""
            }`}
          >
            <img src={img} alt={`Product view ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};