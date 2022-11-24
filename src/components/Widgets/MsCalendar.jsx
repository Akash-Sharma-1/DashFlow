import React from "react";
import { useState } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import { callMsGraph } from "../../graph";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./MailWidgets/SignInButton";
import { SignOutButton } from "./MailWidgets/SignOutButton";
import parse from "html-react-parser";
import { graphConfig } from "../../authConfig";

const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(
          graphConfig.graphCalendarEndPoint,
          response.accessToken
        ).then((response) => setGraphData(response));
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(
            graphConfig.graphCalendarEndPoint,
            response.accessToken
          ).then((response) => setGraphData(response));
        });
      });
  }

  return (
    <>
      <h6>Welcome {name}</h6>
      {graphData ? (
        <>
          <p>
            <strong>Subject: </strong> {graphData.value[0].subject}
          </p>
          <p>
            <strong>Body: </strong> {graphData.value[0].start.dateTime}
          </p>
        </>
      ) : (
        RequestProfileData()
        // <button onClick={RequestProfileData}>
        //   Request Profile Information
        // </button>
      )}
    </>
  );
};

const MsCalendar = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
      </UnauthenticatedTemplate>
    </>
  );
};

export default MsCalendar;
