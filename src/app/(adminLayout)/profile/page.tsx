"use client";
import React from "react";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchUserData } from "./useLogic";
import { ModalProfile } from "./componentProfile/ModalProfile";
import CardProfile from "./componentProfile/CardProfile";

const Profile = () => {
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
      <div className="flex p-5 justify-center items-center ">
        {user && (
          <div className="w-full md:w-[35%] flex justify-center">
            <CardProfile handleOpenModal={handleOpenModal} user={user} />
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
};

export default Profile;
