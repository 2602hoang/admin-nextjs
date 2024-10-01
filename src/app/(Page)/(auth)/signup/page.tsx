import AuthLogin from "@/middleware/AuthLogin";
import React from "react";

function Signup() {
  return (
    <AuthLogin>
      <div className="w-full h-screen  py-10 flex flex-col gap-y-8 justify-center items-center">
        <h1>hello</h1>{" "}
      </div>
    </AuthLogin>
  );
}

export default Signup;
