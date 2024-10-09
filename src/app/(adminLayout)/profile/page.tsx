"use client";
import React from "react";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchUserData } from "./useLogic";
import { ModalProfile } from "./componentProfile/ModalProfile";

function Profile() {
  const {
    user,
    isLoading,
    error,
    isModalOpen,
    handleCloseModal,
    handleOpenModal,
    setPassword,
    setUsername,
    setPhone,
    password,
    username,
    phone,
    handleUpdateUser,
  } = useFetchUserData();
  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={user}>
      <div className="flex px-5 py-0 md:py-5 flex-col space-y-6 justify-center items-center ">
        {user && (
          <div
            className="max-w-1/2
      hover:scale-105
      h-auto bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center space-y-6 
      gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow"
          >
            <div className="resize  bg-sky-300 rounded-2xl">
              {user?.avatar && (
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="size-96 resize rounded-2xl"
                />
              )}
            </div>
            <div className="space-y-4">
              <p className="font-extrabold">Username: {user?.username}</p>
              <p className="">Phone: {user?.phone}</p>
            </div>
            <button
              onClick={handleOpenModal}
              className="bg-sky-700 font-extrabold p-2  px-6 rounded-xl hover:bg-red-400 transition-colors"
            >
              Change Infomation
            </button>
          </div>
        )}
        <ModalProfile
          open={isModalOpen}
          user={user}
          handleCancel={handleCloseModal}
          handleUpdateUser={handleUpdateUser}
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          phone={phone}
          setPhone={setPhone}
        />
      </div>
    </LayoutStateHandler>
  );
}

export default Profile;
