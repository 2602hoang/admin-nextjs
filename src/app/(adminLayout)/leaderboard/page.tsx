"use client";
import React, { useEffect, useState } from "react";
import { Button, Input, notification, Spin, Tooltip } from "antd";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useLeaderboard } from "./useLogic";
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import CardPhoto from "./componentPhoto/CardPhoto";
import ModalPhoto from "./componentPhoto/ModalPhoto";
import { IconSearch } from "@/icon/DataIcon";

export interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

const Leaderboard: React.FC = () => {
  const {
    data,
    isLoadingPhotos,
    error,
    limit,
    open,
    spin,
    handleCancel,
    selectedPhoto,
    addMorePhotos,
    moveMorePhotos,
    openModal,
    handleSearchChange,
    searchId,
    isLoadingPhoto,
    errorPhoto,
  } = useLeaderboard();

  return (
    <LayoutStateHandler isLoading={isLoadingPhotos} error={error} data={data}>
      <div className="pb-5 sticky top-20 md:top-[116px] bg-brown justify-end flex z-40">
        <Input
          className="w-4/5 md:w-2/5 h-10 gap-x-[3px] rounded-lg pl-1 border-none bg-dark-slate-gray text-white focus:border-light-gray focus-within:bg-light-gray hover:bg-light-gray"
          placeholder="Search by ID"
          allowClear
          value={searchId || ""}
          onChange={handleSearchChange}
          prefix={
            spin ? (
              <Spin indicator={<LoadingOutlined spin />} size="small" />
            ) : (
              <IconSearch />
            )
          }
        />
      </div>
      <div className="relative">
        <div className="grid repository-box-grid-1-2-4 w-full gap-y-5 md:gap-10 mt-2 p-4">
          {data?.map((item) => (
            <CardPhoto
              key={item.id}
              openModal={openModal}
              {...item}
              open={open}
            />
          ))}
        </div>
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
        errorPhoto={errorPhoto}
        isLoadingPhoto={isLoadingPhoto}
        handleCancel={handleCancel}
        open={open}
        photo={selectedPhoto}
        openModal={openModal}
      />
    </LayoutStateHandler>
  );
};

export default Leaderboard;
