import React from "react";
import { Photos } from "../page";
import { Button, Input } from "antd";

// Define props interface
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
  return (
    <div className="bg-dark-slate-gray shadow-lg rounded-lg p-4 flex flex-col justify-between">
      <div>
        <img
          src={thumbnailUrl}
          alt={title}
          className="rounded-3xl w-full h-auto"
        />
      </div>
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
          {open === false ? (
            <Button onClick={() => openModal(id)}>View</Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPhoto;
