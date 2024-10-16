"use client";
import React from "react";
import { Button, Form, Input, Modal, notification } from "antd";
import { User } from "../useLogic";
import { validateUsername } from "@/utils";

interface ModalProfileProps {
  open: boolean;
  handleCancel: () => void;
  user: User | undefined;
  handleUpdateUser: (
    id: number,
    userData: {
      username: string;
      phone: string;
      password: string;
    }
  ) => void;
  setPassword: (value: string) => void;
  setUsername: (value: string) => void;
  setPhone: (value: string) => void;
  password: string;
  username: string;
  phone: string;
}

export const ModalProfile: React.FC<ModalProfileProps> = ({
  open,
  user,
  handleCancel,
  handleUpdateUser,
  setPassword,
  setUsername,
  setPhone,
  password,
  username,
  phone,
}) => {
  const [form] = Form.useForm();

  const handleChange = (field: string, value: string) => {
    if (field === "username") setUsername(value);
    if (field === "phone") setPhone(value);
    if (field === "password") setPassword(value);
  };
  const handleSubmit = async (values: {
    username?: string;
    phone?: string;
    password?: string;
  }) => {
    if (!values.username && !values.phone && !values.password) {
      notification.warning({
        message: "Please fill in at least one field",
        duration: 1,
      });
      handleCancel();
      return;
    }

    if (user) {
      try {
        await handleUpdateUser(user.id_user, {
          username: values.username || username,
          phone: values.phone || phone,
          password: values.password || password,
        });
        form.resetFields();
        handleCancel();
      } catch (error) {
        notification.error({
          message: "Failed to update user information",
          duration: 1,
        });
      }
    }
  };

  return (
    <Modal
      title={
        <div className="text-center bg-brown text-red-500">
          <h1>Change Information</h1>
        </div>
      }
      open={open}
      onCancel={handleCancel}
      footer={null}
      className="mt-20"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item
          name="username"
          label={<p className="text-white">Username</p>}
          required={false}
          rules={[
            {
              max: 40,
              message: "Please input at most 40 characters",
            },
            { validator: validateUsername(user?.username || "") },
          ]}
        >
          <Input
            //
            allowClear
            placeholder={user?.username}
            className="w-full px-3 py-3 border border-gray-700 focus-within:bg-zinc-900 hover:bg-zinc-900 bg-gray-700 text-white rounded-md"
            onChange={(e) => handleChange("username", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label={<p className="text-white">Phone Number</p>}
          rules={[
            {
              pattern: /^0[0-9]{9}$/,
              message:
                "Phone number must start with '0' and format as '0xxxxxxxx'",
            },
          ]}
        >
          <Input
            placeholder={user?.phone}
            allowClear
            className="w-full px-3 py-3 border border-gray-700 focus-within:bg-zinc-900 hover:bg-zinc-900 bg-gray-700 text-white rounded-md"
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </Form.Item>

        <Form.Item
          label={<p className="text-white">New Password</p>}
          name="password"
          rules={[
            { min: 6, message: "Password must be at least 6 characters long!" },
          ]}
        >
          <Input.Password
            placeholder="New Password"
            allowClear
            className="w-full px-3 py-3 border border-gray-700 focus-within:bg-zinc-900 hover:bg-zinc-900 bg-gray-700 text-white rounded-md"
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </Form.Item>
        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className="bg-sky-700 hover:bg-sky-500 transition-colors rounded-2xl"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Modal>
  );
};
