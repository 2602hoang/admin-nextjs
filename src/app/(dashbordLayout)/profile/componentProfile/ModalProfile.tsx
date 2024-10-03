import React, { useRef } from "react";
import { Modal, notification } from "antd";

interface ModalProfileProps {
  open: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  handlePasswordSubmit: (password: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

export const ModalProfile: React.FC<ModalProfileProps> = ({
  open,
  handleCancel,
  handlePasswordSubmit,
  password,
  setPassword,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      notification.error({
        message: "Error",
        description: "Password must be at least 6 characters long",
        showProgress: true,
        duration: 1.5,
      });
      if (inputRef.current) {
        inputRef.current.focus();
      }
      return;
    }

    notification.success({
      message: "Success",
      description: "Password changed successfully",
      showProgress: true,
      duration: 1.5,
    });
    handlePasswordSubmit(password);
  };

  return (
    <Modal
      title={
        <div className="text-center bg-brown text-red-500">
          <h1>Change Password</h1>
        </div>
      }
      visible={open}
      onCancel={handleCancel}
      footer={null}
      className="mt-48"
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={password}
          ref={inputRef}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border rounded p-2 mb-4 w-full bg-light-gray text-white"
          required
        />

        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 p-2 rounded-2xl"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-sky-700 text-white hover:bg-sky-500 transition-colors p-2 rounded-2xl"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
