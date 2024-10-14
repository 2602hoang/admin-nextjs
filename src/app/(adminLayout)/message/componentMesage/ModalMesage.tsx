import { Button, Modal } from "antd";
import React from "react";
import { Messages } from "../page";
import FormComment from "./FormComment";
import { RenderCmt } from "./RederCmt";

interface ModalMesageProps {
  open: boolean;
  handleCancel: () => void;
  data: Messages[] | undefined;
  userId: number | null;
  userRole: number | null;
  selectedId: number | null;
  comments: string;
  setComments: (value: string) => void;
  mutation: unknown;
  repkey: number | 0;
  setRepkey: (value: number | 0) => void;
  filteredComments: Messages[] | undefined;
  replyingId: number | null;
  setReplyingId: (value: number | null) => void;
  handleReplyClick: (key: number) => void;
}

const ModalMesage: React.FC<ModalMesageProps> = ({
  handleCancel,
  selectedId,
  open,
  data,
  comments,
  setComments,
  mutation,
  userId,
  userRole,
  repkey,
  setRepkey,
  filteredComments,
  replyingId,
  setReplyingId,
  handleReplyClick,
}) => {
  return (
    <Modal
      open={open}
      footer={
        <Button
          key="ok"
          type="default"
          onClick={() => {
            handleCancel();
            setReplyingId(null);
          }}
        >
          OK
        </Button>
      }
      onCancel={() => {
        handleCancel();
        setReplyingId(null);
      }}
    >
      {data?.map((item: Messages) => (
        <div className="py-2" key={item.key}>
          {item.id === selectedId && (
            <>
              <RenderCmt
                key={item.key}
                cmt={item}
                filteredComments={filteredComments}
              />
              <Button
                onClick={() => {
                  handleReplyClick(item.key);
                }}
                type="link"
                size="small"
                key={item.id}
              >
                Reply
              </Button>
            </>
          )}

          {item.id === selectedId && replyingId === item.key && (
            <>
              <FormComment
                repkey={repkey}
                setReplyingId={setReplyingId}
                setRepkey={setRepkey}
                idComment={item.key}
                userId={userId || null}
                userRole={userRole}
                comments={comments}
                setComments={setComments}
                mutation={mutation as any}
                key={item.key}
              />
            </>
          )}
        </div>
      ))}
    </Modal>
  );
};

export default ModalMesage;
