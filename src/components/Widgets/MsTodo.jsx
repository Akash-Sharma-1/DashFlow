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
  const [isTodoData, setIsTodoData] = useState(false);
  const [todoData, setTodoData] = useState(null);

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
        callMsGraph(graphConfig.graphTodoEndPoint, response.accessToken).then(
          (response) => setGraphData(response)
        );
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(graphConfig.graphTodoEndPoint, response.accessToken).then(
            (response) => setGraphData(response)
          );
        });
      });
  }

  const RequestTaskData = () => {
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then((response) => {
        callMsGraph(`${graphConfig.graphTodoEndPoint}/${graphData.value[1].id}/tasks`, response.accessToken).then(
          (response) => setTodoData(response)
        ).then(() => setIsTodoData(true));
      })
      .catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
          callMsGraph(`${graphConfig.graphTodoEndPoint}/${graphData.value[1].id}/tasks`, response.accessToken).then(
            (response) => setGraphData(response)
          );
        });
      });
  }

  return (
    <>
      <h6>Welcome {name}</h6>
      {graphData ? (
        <>
        {isTodoData ? (
          <div>
            {todoData.value[0].title}
          </div>
        ) : (
          <div onClick={RequestTaskData}>
            {graphData.value[1].displayName}
          </div>
        )}
          {/* <strong>Body: </strong>{" "}
          <div style={{ overflowY: "auto", height: "120px" }}>
            {parse(graphData.value[0].body.content)}
          </div> */}

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

const MsTodo = () => {
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

export default MsTodo;