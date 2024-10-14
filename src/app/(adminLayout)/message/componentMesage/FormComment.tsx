import { Button, Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

interface Prop {
  comments: string;
  setComments: (value: string) => void;
  mutation: {
    mutate: (variables?: any) => void;
    isLoading: boolean;
  };
  userId: number | null;
  userRole: number | null;
  repkey: number | null;
  setRepkey: (value: number | 0) => void;
  idComment: number | 0;
  setReplyingId: (value: number | null) => void;
}

const FormComment: React.FC<Prop> = ({
  comments,
  setComments,
  mutation,
  userId,
  userRole,
  repkey,
  setRepkey,
  idComment,
  setReplyingId,
}) => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    await mutation.mutate({
      userId,
      userRole,
      comments,
      repkey,
    });
    setComments("");
    setReplyingId(null);
    form.resetFields();
  };

  return (
    <div>
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item
          label={<h3 className="text-teal-300">Comments</h3>}
          name="comments"
          required={false}
          rules={[{ required: true, message: "Please enter a comment" }]}
        >
          <TextArea
            value={comments}
            className="h-full gap-x-[3px] rounded-lg p-5 flex border-none bg-dark-slate-gray text-white focus:border-light-gray focus-within:bg-light-gray hover:bg-light-gray"
            onChange={(e) => {
              setComments(e.target.value);
              setRepkey(idComment);
            }}
            placeholder="Comments"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={mutation.isLoading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComment;
