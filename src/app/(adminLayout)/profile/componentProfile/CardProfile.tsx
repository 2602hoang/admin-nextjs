import React from "react";
import { User } from "../useLogic";
import { Avatar, Popconfirm } from "antd";
import clsx from "clsx";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface CardProfileProps {
  user: User | undefined;
  handleOpenModal: () => void;
}

const CardProfile: React.FC<CardProfileProps> = ({ user, handleOpenModal }) => {
  return (
    <div
      className={clsx(
        "w-full min-h-[400px] bg-dark-slate-gray hover:scale-105  rounded-3xl text-neutral-300 p-4 flex flex-col items-center justify-center space-y-8gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow",
        {
          "border-2 border-red-500 border-solid": user?.status,
          "border-2 border-green-400 border-solid": !user?.status,
        }
      )}
    >
      <div className="flex w-full flex-col items-center justify-center">
        <div className="resize bg-sky-300 rounded-2xl overflow-hidden">
          {user?.avatar ? (
            <Avatar
              size={160}
              src={user.avatar}
              alt={user.username}
              className="object-cover rounded-2xl"
            />
          ) : (
            <Avatar size={160} className="object-cover rounded-2xl">
              {user?.username}
            </Avatar>
          )}
        </div>
        <div className="space-y-6 mt-6 text-center">
          <p className="font-extrabold">Username: {user?.username}</p>
          <p>Phone: {user?.phone}</p>
          <Popconfirm
            placement="bottom"
            title="Open Change Infomation"
            description="Are you sure you want to change your infomation?"
            onConfirm={handleOpenModal}
            okText="Yes"
            cancelText="No"
            icon={<QuestionCircleOutlined />}
          >
            <button className="bg-sky-700 font-extrabold p-2 max-w-64  px-6 rounded-xl hover:bg-red-400 transition-colors">
              Change Infomation
            </button>
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
