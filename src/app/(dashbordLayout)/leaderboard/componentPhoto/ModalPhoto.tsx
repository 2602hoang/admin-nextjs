import { Button, Modal } from "antd";
import React from "react";
import { Photos } from "../page";
import CardPhoto from "./CardPhoto";
import { Loading } from "@/components/state/StateCallApi";

interface ModalPhotoProps {
  open: boolean;
  handleCancel: () => void;
  photo: Photos | null;
  openModal: (id: number) => void;
}

const ModalPhoto: React.FC<ModalPhotoProps> = ({
  handleCancel,
  open,
  photo,
  openModal,
}) => {
  return (
    <Modal
      title={
        <div className="bg-brown text-white">
          <h1 className="text-lg font-semibold">View Photo</h1>
        </div>
      }
      open={open}
      width={400}
      onCancel={handleCancel}
      footer={
        <Button
          key="ok"
          type="primary"
          className="bg-red"
          onClick={handleCancel}
        >
          OK
        </Button>
      }
    >
      {photo ? (
        <CardPhoto open={open} openModal={openModal} {...photo} />
      ) : (
        <Loading />
      )}
    </Modal>
  );
};

export default ModalPhoto;
