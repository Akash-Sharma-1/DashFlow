import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <button onClick={() => handleLogin("popup")}>Sign in</button>
  );
};
