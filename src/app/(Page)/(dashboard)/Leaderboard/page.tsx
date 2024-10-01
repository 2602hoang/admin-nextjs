"use client";
import React from "react";

import { Input, notification } from "antd";
import { IconSearch } from "@/icon/DataIcon";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { useFetchPhotoData, useLeaderboard } from "./useLogic";

// Define the interface for the photo data
interface Photos {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

function Leaderboard() {
  const { page, setPage, searchId, setSearchId, inputRef, handleClear } =
    useLeaderboard();
  const { data, isLoading, error } = useFetchPhotoData(
    page,
    searchId ? searchId : undefined
  );
  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={data}>
      <div className="py-4 flex justify-center md:sticky fixed w-full md:top-[116px] z-40 top-16 bg-brown">
        <Input
          className="md:w-2/5 w-3/5 h-10 gap-x-[3px] rounded-lg pl-1 border-none bg-dark-slate-gray text-white focus:border-light-gray focus-within:bg-light-gray hover:bg-light-gray"
          placeholder="Search by ID"
          ref={inputRef}
          value={searchId}
          onChange={(e) => {
            const value = e.target.value;
            if (value === "" || /^[0-9]+$/.test(value)) {
              setSearchId(value ? parseInt(value) : "");
            } else {
              // alert("Please enter a valid number");
              notification.error({
                message: "Please enter a valid number",
                showProgress: true,
                duration: 1.5,
              });
            }
          }}
          prefix={<IconSearch />}
        />
        <button
          onClick={handleClear}
          className="ml-4 px-2 md:px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-y-5 md:gap-10 mt-2 p-4">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((item: Photos) => (
            <div
              key={item.id}
              className="bg-dark-slate-gray shadow-lg rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="rounded-3xl w-full h-auto"
                />
              </div>
              <div className="py-6">
                <h1 className="text-lg font-semibold">{item.title}</h1>
              </div>
              <div className="text-gray-500 space-y-2 mt-2">
                <p>Album ID: {item.albumId}</p>
                <p>Photo ID: {item.id}</p>
              </div>
            </div>
          ))
        ) : data ? (
          <div
            key={data.id}
            className="bg-dark-slate-gray col-span-2 start-col-1 md:col-start-1 xl:col-start-2  items-center shadow-lg rounded-lg p-4 flex "
          >
            <div className="min-w-32">
              <img
                src={data.thumbnailUrl}
                alt={data.title}
                className="rounded-3xl w-full h-auto"
              />
            </div>
            <div className="flex flex-col pl-2 md:pl-10 justify-center">
              <div className="py-6">
                <h1 className="text-lg font-semibold">{data.title}</h1>
              </div>
              <div className="text-gray-500 space-y-5">
                <p>Album ID: {data.albumId}</p>
                <p>Photo ID: {data.id}</p>
              </div>
            </div>
          </div>
        ) : (
          // Display this message if data is null
          <div className=" bg-dark-slate-gray shadow-lg rounded-lg md:col-start-1 xl:col-start-2 col-span-2 p-4 text-center">
            <h1 className="text-lg font-semibold text-gray-500">
              No photo found for the specified ID.
            </h1>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {!searchId && (
        <div className="flex justify-center space-x-4 my-4">
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous Page
          </button>
          <button
            onClick={() => setPage((old) => old + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Next Page
          </button>
        </div>
      )}
    </LayoutStateHandler>
  );
}

export default Leaderboard;
