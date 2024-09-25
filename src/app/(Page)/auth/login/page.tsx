/* eslint-disable jsx-a11y/alt-text */
"use client";
import {
  IconFacebook,
  IconGoogle,
  IconHiden,
  Iconshow,
} from "@/assets/DataIcon";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="w-full h-screen  py-10 flex flex-col gap-y-8 justify-center items-center">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          title="Light_Teal"
          className="bg-brown w-[210px] h-14"
          src="https://themewagon.github.io/nickelfox/Logo-with-text.png"
        />
      </div>
      <div className="bg-dark-slate-gray w-10/12 md:w-2/6 py-4 rounded-2xl shadow-xl overflow-hidden">
        <div className="gap-y-4 p-7 flex flex-col">
          <div>
            <h3 className="text-center text-[2rem]  font-semibold leading-[1.167rem] text-white">
              Log In
            </h3>
          </div>
          <div className="mt-4">
            <h6 className="text-center leading-[1.6rem] text-[1.25rem] font-medium  text-gray-menu">
              Don’t have an account?{" "}
              <a
                onClick={() => router.push("/auth/signup")}
                className="text-light-teal"
              >
                Sign up
              </a>
            </h6>
          </div>
          <form method="POST" action="#" className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm">
              <div className="flex flex-col gap-y-2">
                <label className="">Email </label>
                <input
                  placeholder="Email address"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="flex flex-col gap-y-2 mt-8 relative ">
                <label className="">Password</label>
                <input
                  placeholder="Password"
                  className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                />
                {/* Icon for toggling password visibility */}
                <div
                  className="absolute inset-y-0 right-0 pr-3 flex items-center pt-5  cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <Iconshow /> : <IconHiden />}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <label className="ml-2 block text-sm text-gray-400">
                  Keep me signed in
                </label>
              </div>
            </div>

            <div>
              <a
                href="/"
                className="group relative w-full flex justify-center py-3  px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-light-teal hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Log In
              </a>
              <hr className="flex-shrink-0 border-b border-solid border-darker-gray mt-4"></hr>
            </div>
          </form>
        </div>
        <div className="px-8 py-2  text-center ">
          <div className=" mb-6">
            <p className=" ">Or sign in using:</p>
          </div>
          <div className="flex justify-center gap-x-4 items-center">
            <Button
              type="link"
              icon={<IconGoogle />}
              className="w-[45%] h-14 leading-[1.75rem] text-light-teal border-2 py-3 flex px-4 justify-center items-center border-light-teal"
            >
              Google
            </Button>
            <Button
              icon={<IconFacebook />}
              type="link"
              className="w-[45%] text-light-teal h-14 leading-[1.75rem] flex justify-center items-center px-4 border-2 py-3 border-light-teal"
            >
              Facebook
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
