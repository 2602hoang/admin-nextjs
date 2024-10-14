import { Button, Modal } from "antd";
import React from "react";
import { Photos } from "../page";
import CardPhoto from "./CardPhoto";
import { Loading } from "@/components/state/StateCallApi";
import LayoutStateHandler from "@/components/layout/LayoutState";

interface ModalPhotoProps {
  open: boolean;
  handleCancel: () => void;
  photo: Photos | null;
  openModal: (id: number) => void;
  isLoadingPhoto: boolean;
  errorPhoto: any;
}

const ModalPhoto: React.FC<ModalPhotoProps> = ({
  handleCancel,
  open,
  photo,
  isLoadingPhoto,
  errorPhoto,
  openModal,
}) => {
  return (
    <div className="max-h-[500px]">
      <Modal
        title={
          <h1 className="text-lg font-semibold bg-brown text-white">
            View Photo
          </h1>
        }
        open={open}
        width={400}
        onCancel={handleCancel}
        footer={
          <Button
            key="ok"
            type="default"
            className="bg-red"
            onClick={handleCancel}
          >
            OK
          </Button>
        }
      >
        {photo && (
          <LayoutStateHandler
            isLoading={isLoadingPhoto}
            error={errorPhoto}
            data={photo}
          >
            <CardPhoto open={open} openModal={openModal} {...photo} />
          </LayoutStateHandler>
        )}
        {/* : (
      <Loading />) */}
      </Modal>
    </div>
  );
};

export default ModalPhoto;
