"use client";
import React from "react";
import { useLogicReportUser, UserReport } from "./useLogic";
import LayoutStateHandler from "@/components/layout/LayoutState";
import CardProfile from "../profile/componentProfile/CardProfile";
import CountUp from "react-countup";
import { Button, DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { ModalProfile } from "../profile/componentProfile/ModalProfile";
import clsx from "clsx";
import { formatCurrency } from "@/utils";
import { IsAdmin } from "@/middleware/IsAdmin";

const History = () => {
  const {
    data,
    isLoading,
    startDate,
    endDate,
    userData,
    isLoadingUserData,
    errorUserData,
    onDateChange,
    error,
    userId,
    selectedUser,
    handleViewClick,
    dateRangeText,
    handleUpdateSelectedUser,
    openModalWithUser,
    isModalOpen,
    handleCloseModal,
    setPassword,
    setUsername,
    setPhone,
    password,
    username,
    phone,
  } = useLogicReportUser();

  return (
    <div className="flex flex-col justify-center items-center w-full space-y-3 my-3">
      <h1 className="text-lg font-bold mb-2 text-center">{dateRangeText()}</h1>

      <IsAdmin isNotAdmin={null}>
        {!startDate && !endDate ? (
          <Button onClick={handleViewClick}>View</Button>
        ) : (
          <div className="flex justify-center items-center mt-4 flex-col space-y-3">
            <DatePicker.RangePicker
              format="YYYY-MM-DD"
              onChange={onDateChange}
              placement="topLeft"
              placeholder={["Start Date", "End Date"]}
              value={[
                startDate ? dayjs(startDate) : dayjs().subtract(7, "day"),
                endDate ? dayjs(endDate) : dayjs(),
              ]}
              disabledDate={(current) => current > dayjs()}
            />
            <LayoutStateHandler
              isLoading={isLoadingUserData}
              error={errorUserData}
              data={userData}
            >
              <div className="mt-4 flex justify-center  ">
                <div className="grid grid-cols-2 md:grid-cols-2 place-items-center gap-4">
                  {!!userData &&
                    userData.map((user: UserReport, index: number) => (
                      <div
                        key={index}
                        className={clsx(
                          "bg-dark-slate-gray p-2 md:p-4 flex flex-col items-center text-lg min-h-[350px]  rounded-xl border-2 border-solid border-white ",
                          {
                            "col-span-2  place-content-center ":
                              (index === 0 && userData.length === 3) ||
                              userData.length === 1,
                          }
                        )}
                      >
                        <h2 className=" font-bold mb-2 text-center">
                          Result {index + 1}
                        </h2>
                        <div className="space-y-5">
                          <p>User: {user.user.username}</p>
                          <p>
                            Number of Orders:{" "}
                            <span>
                              <CountUp
                                end={user.orderCount}
                                duration={2}
                                separator=","
                              />
                            </span>
                          </p>
                          <p>
                            Total Amount Spent:{" "}
                            <span>
                              <CountUp
                                end={user.totalSpent}
                                duration={2}
                                separator=","
                                formattingFn={(value) =>
                                  formatCurrency(value, "vi-VN", "VND")
                                }
                              />
                            </span>
                          </p>
                          <p>
                            Phone Number:<span> {user.user.phone} </span>
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </LayoutStateHandler>
          </div>
        )}
      </IsAdmin>

      <LayoutStateHandler isLoading={isLoading} error={error} data={data}>
        <div className="grid repository-box-grid-1-2-4 w-full gap-4 md:gap-10 py-7 place-content-center">
          {[...(data?.activeUsers || []), ...(data?.inactiveUsers || [])]
            .filter((user) => user.id_user !== userId)
            .map((user) => (
              <div
                key={user.id_user}
                className="flex justify-center items-center"
              >
                <CardProfile
                  user={user}
                  handleOpenModal={() => openModalWithUser(user)}
                />
              </div>
            ))}
          <ModalProfile
            open={isModalOpen}
            handleCancel={handleCloseModal}
            handleUpdateUser={handleUpdateSelectedUser}
            password={password}
            setPassword={setPassword}
            username={username}
            setUsername={setUsername}
            phone={phone}
            setPhone={setPhone}
            user={selectedUser}
          />
        </div>
      </LayoutStateHandler>
    </div>
  );
};

export default History;
