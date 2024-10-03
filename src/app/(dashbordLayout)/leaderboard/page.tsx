"use client";
import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchPhotoData, useLeaderboard } from "./useLogic";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import CardPhoto from "./componentPhoto/CardPhoto";
import ModalPhoto from "./componentPhoto/ModalPhoto";

export interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const Leaderboard: React.FC = () => {
  const {
    limit,
    open,
    handleCancel,
    selectedPhoto,
    addMorePhotos,
    moveMorePhotos,
    isLoadingMore,
    setOpen,
    setSelectedPhoto,
  } = useLeaderboard();

  const { data, isLoading, error, fetchPhotoById } = useFetchPhotoData(limit);

  const openModal = async (id: number) => {
    const photo = await fetchPhotoById(id);
    setSelectedPhoto(photo);
    setOpen(true);
  };

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={data}>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-y-5 md:gap-10 mt-2 p-4 ${
          isLoadingMore ? "cursor-wait" : ""
        }`}
      >
        {data?.map((item: Photos) => (
          <CardPhoto
            key={item.id}
            openModal={openModal}
            {...item}
            open={open}
          />
        ))}
      </div>
      {limit >= 52 && (
        <div className="flex justify-center my-4">
          <Tooltip title="Load more" placement="left" color="blue">
            <Button
              className="bg-brown text-blue-400 hover:text-green-400"
              type="link"
              onClick={addMorePhotos}
              icon={<ArrowDownOutlined />}
            />
          </Tooltip>
          {limit > 52 && (
            <Tooltip title="Hide" placement="right" color="blue">
              <Button
                className="bg-brown text-blue-400 hover:text-green-400"
                type="link"
                onClick={moveMorePhotos}
                icon={<ArrowUpOutlined />}
              />
            </Tooltip>
          )}
        </div>
      )}
      <ModalPhoto
        handleCancel={handleCancel}
        open={open}
        photo={selectedPhoto}
        openModal={openModal}
      />
    </LayoutStateHandler>
  );
};

export default Leaderboard;
