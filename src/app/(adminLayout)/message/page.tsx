"use client";
import React from "react";
import LayoutStateHandler from "@/components/layout/LayoutState";
import { Avatar, Badge, Button } from "antd";
import useLogicComments from "./uselogic";
import { IsAdmin } from "@/middleware/IsAdmin";
import ModalMesage from "./componentMesage/ModalMesage";
import { RenderCmt } from "./componentMesage/RederCmt";
import FormComment from "./componentMesage/FormComment";
import { user } from "@nextui-org/theme";
import IsUser from "./componentMesage/IsUser";

export interface Messages {
  key: number;
  id: number;
  username: string;
  phone: string;
  role: number;
  comments: string;
  time: string;
  repkey: number;
}

const Message = () => {
  const {
    data,
    isLoading,
    error,
    userId,
    userRole,
    groupedMessages,
    handleCancel,
    openModal,
    open,
    selectedId,
    comments,
    setComments,
    repkey,
    setRepkey,
    mutation,
    filteredComments,
    replyingId,
    setReplyingId,
    handleReplyClick,
  } = useLogicComments();

  return (
    <LayoutStateHandler isLoading={isLoading} error={error} data={data}>
      <h1 className="text-2xl font-bold text-center">Message</h1>

      <IsAdmin isNotAdmin={<IsUser />}>
        <div className="justify-center items-center flex pt-10 gap-40">
          {Object.entries(groupedMessages).map(([key, count]) => {
            const [id, username, role] = key.split("-");
            if (Number(role) !== 123) {
              return (
                <Button
                  key={key}
                  onClick={() => openModal(Number(id))}
                  type="link"
                  className="flex justify-center items-center"
                >
                  <Badge count={count}>
                    <Avatar className="bg-teal-300 rounded-xl" size={80}>
                      {username}
                    </Avatar>
                  </Badge>
                </Button>
              );
            }
            return null;
          })}
        </div>
      </IsAdmin>

      <ModalMesage
        handleReplyClick={handleReplyClick}
        setReplyingId={setReplyingId}
        replyingId={replyingId}
        repkey={repkey}
        setRepkey={setRepkey}
        selectedId={selectedId}
        filteredComments={filteredComments}
        open={open}
        handleCancel={handleCancel}
        data={data}
        userId={userId}
        userRole={userRole}
        comments={comments}
        setComments={setComments}
        mutation={mutation}
      />
    </LayoutStateHandler>
  );
};
export default Message;
