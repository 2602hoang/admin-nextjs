import React, { useState } from "react";
import { Photos } from "../page";
import { Button, Image } from "antd";

interface CardPhotoProps extends Photos {
  openModal: (id: number) => void;
  open: boolean;
}
const CardPhoto: React.FC<CardPhotoProps> = ({
  openModal,
  open,
  id,
  title,
  thumbnailUrl,
  albumId,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return (
    <div className="bg-dark-slate-gray shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <Image
        loading="lazy"
        src={thumbnailUrl}
        alt={title}
        className={`rounded-3xl w-full h-auto transition-all duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0 blur-sm"
        }`}
        onLoad={handleImageLoad}
      />
      <div className="py-6">
        <h3 className="text-lg text-white font-semibold overflow-hidden line-clamp-2">
          {title}
        </h3>
      </div>
      <div className="text-gray-500 flex justify-between items-center">
        <div className="space-y-2">
          <p>Album ID: {albumId}</p>
          <p>Photo ID: {id}</p>
        </div>
        <div>
          {!open && <Button onClick={() => openModal(id)}>View</Button>}
        </div>
      </div>
    </div>
  );
};

export default CardPhoto;
