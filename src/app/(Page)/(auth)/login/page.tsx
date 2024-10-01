"use client";
import { IconFacebook, IconGoogle, IconHiden, Iconshow } from "@/icon/DataIcon";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { actionLogin } from "./uselogicLogin";
import { LoadingPage } from "@/components/loading/LoadingPage";

function Login() {
  const router = useRouter();
  const {
    showPassword,
    phone,
    userToken,
    setPhone,
    password,
    setPassword,
    localError,
    handleSubmit,
    togglePasswordVisibility,
  } = actionLogin();
  const token = userToken;

  return (
    <>
      {!token   ? (
        <LoadingPage />
      ) : (
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
              <h6 className="text-center leading-[1.6rem] text-[1.25rem] font-medium text-gray-menu">
                Don’t have an account?{" "}
                <a
                  onClick={() => router.push("/signup")}
                  className="text-light-teal"
                >
                  Sign up
                </a>
              </h6>
              <form onSubmit={handleSubmit} className="mt-4 md:mt-8 space-y-4">
                <div className="rounded-md shadow-sm">
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      placeholder="Enter Phone"
                      className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 mt-8 relative">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      placeholder="Password"
                      className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center pt-5 cursor-pointer"
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
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-400"
                    >
                      Keep me signed in
                    </label>
                  </div>
                </div>
                {localError && <p className="error">{localError}</p>}
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-light-teal hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Log In
                  </button>
                  <hr className="flex-shrink-0 border-b border-solid border-darker-gray mt-4" />
                </div>
              </form>
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
      )}
    </>
  );
}

export default Login;
