"use client";
import { formattedTimestamp } from "@/utils";
import { CommentOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import React from "react";
import { Messages } from "../page";

interface RenderCmtProps {
  cmt: Messages;
  filteredComments: Messages[] | undefined;
}

export const RenderCmt: React.FC<RenderCmtProps> = ({
  cmt,
  filteredComments,
}) => {
  const hasReplies = filteredComments?.some(
    (admin) => admin.repkey === cmt.key
  );
  return (
    <div
      key={cmt.id}
      className="flex-col text-white bg-dark-slate-gray p-5 flex w-full border-2 my-3 rounded-2xl"
    >
      <div className="flex flex-col gap-y-6 gap-5 border-b-2 snap-normal">
        <a>
          <Avatar icon={<UserOutlined />} />
          <span className="ml-2 text-sky-400">{cmt.username}</span>
        </a>
        <p className="text-start font-thin text-[10px]">
          This [ 0{cmt.phone} ] left a comment{" "}
          <span>{formattedTimestamp(cmt.time)}</span> 👇👇{" "}
        </p>
        <b className="text-start">
          Comment
          <CommentOutlined className="ml-1" />:
          <span className="ml-6">{cmt.comments}</span>
        </b>
      </div>
      {hasReplies && (
        <div>
          {filteredComments?.map(
            (admin, index) =>
              admin.repkey === cmt.key && (
                <p key={index}>
                  Reply by admin {admin.id}: {admin.comments}
                </p>
              )
          )}
        </div>
      )}
    </div>
  );
};
