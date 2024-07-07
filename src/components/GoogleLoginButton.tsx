import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const GoogleLoginButton: React.FC = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log("Login Failed");
      }}
      theme="filled_black"
      width={300}
    />
  );
};

export default GoogleLoginButton;