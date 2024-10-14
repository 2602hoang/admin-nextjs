import React from "react";
import useLogicComments from "../uselogic";
import FormComment from "./FormComment";
import { RenderCmt } from "./RederCmt";

const IsUser= () => {
  const {
    data,
    userId,
    userRole,
    comments,
    setComments,
    setReplyingId,
    repkey,
    setRepkey,
    mutation,
    filteredComments,
  } = useLogicComments();

  return (
    <div className="justify-center items-center flex flex-col ">
      {data?.map(
        (cmt) =>
          cmt.id === userId && (
            <div className="w-1/2" key={cmt.time}>
              <RenderCmt cmt={cmt} filteredComments={filteredComments} />
            </div>
          )
      )}
      <div className="w-1/2">
        <FormComment
          setReplyingId={setReplyingId}
          repkey={repkey}
          setRepkey={setRepkey}
          comments={comments}
          setComments={setComments}
          mutation={mutation}
          userId={userId}
          userRole={userRole}
          idComment={0}
        />
      </div>
    </div>
  );
};

export default IsUser;
