"use client";
import { IconFacebook, IconGoogle, IconHiden, Iconshow } from "@/icon/DataIcon";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

import { actionLogin } from "./uselogicLogin";

function Login() {
  const router = useRouter();
  const {
    showPassword,
    phone,
    setPhone,
    password,
    setPassword,
    handleSubmit,
    togglePasswordVisibility,
  } = actionLogin();
  return (
    <>
      <div className="py-2 md:py-5 w-full flex flex-col gap-y-3 md:gap-y-8 justify-center items-center">
        <div>
          <img
            title="Light_Teal"
            className="bg-brown max-w-[210px] h-10 md:h-14"
            src="https://themewagon.github.io/nickelfox/Logo-with-text.png"
            alt="Logo"
          />
        </div>
        <div className="bg-dark-slate-gray w-10/12 md:w-3/5 lg:w-2/6 max-w-[500px] md:py-5 py-0 rounded-2xl shadow-xl overflow-hidden">
          <div className="gap-y-4 md:p-7 p-3 flex flex-col">
            <h3 className="text-center text-3xl font-semibold text-white">
              Log In
            </h3>
            <p className="text-center text-lg font-medium text-gray-menu">
              Don’t have an account?{" "}
              <a
                onClick={() => router.push("/signup")}
                className="text-light-teal cursor-pointer"
              >
                Sign up
              </a>
            </p>
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="mt-4 md:mt-8 space-y-4 rounded-md shadow-sm"
            >
              <Form.Item
                label={<p className="text-white">Phone</p>}
                name="phone"
                required={false}
                rules={[
                  {
                    required: true,
                    message: "Please enter your phone number!",
                  },
                  {
                    pattern: /^0[0-9]{9}$/,
                    message:
                      "Phone number must start with '0' and format as '0xxxxxxxx'",
                  },
                ]}
              >
                <Input
                  placeholder="Enter Phone"
                  className="w-full px-3 py-3 border border-gray-700 focus-within:bg-zinc-900 hover:bg-zinc-900 bg-gray-700 text-white rounded-md"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="password"
                label={<p className="text-white">Password</p>}
                required={false}
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                  {
                    min: 6,
                    message: "Password must be at least 6 characters long!",
                  },
                  {
                    validator: (_, value) => {
                      if (value && value.includes(" ")) {
                        return Promise.reject(
                          new Error("Password cannot contain spaces!")
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input
                  id="password"
                  placeholder="Password"
                  className="w-full px-3 py-3 border border-gray-700 focus-within:bg-zinc-900 hover:bg-zinc-900 bg-gray-700 text-white rounded-md"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  suffix={
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center  cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <Iconshow /> : <IconHiden />}
                    </div>
                  }
                />
              </Form.Item>

              <div className="flex items-center justify-between mt-4">
                <Form.Item>
                  <div className="flex items-center">
                    <Input
                      className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                    />
                    <p className="ml-2 block text-sm text-gray-400">
                      Keep me signed in
                    </p>
                  </div>
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className=" w-full py-5 text-lg font-medium rounded-md text-black bg-light-teal  "
                >
                  Log In
                </Button>
              </Form.Item>
              <hr className="flex-shrink-0 border-b border-solid border-darker-gray mt-4" />
            </Form>
          </div>
          <div className="px-8 pb-2 text-center">
            <div className="mb-4">
              <p>Or sign in using:</p>
            </div>
            <div className="flex justify-center gap-x-4 items-center">
              <Button
                type="link"
                icon={<IconGoogle />}
                className="w-[45%] h-10 leading-[1.75rem] text-light-teal border-2 py-2 flex px-3 justify-center items-center border-light-teal"
              >
                Google
              </Button>
              <Button
                type="link"
                icon={<IconFacebook />}
                className="w-[45%] text-light-teal h-10 leading-[1.75rem] flex justify-center items-center px-3 border-2 py-2 border-light-teal"
              >
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
