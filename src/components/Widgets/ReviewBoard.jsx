import React from "react";
import { useState } from "react";
import { mwAPIs } from "../../authConfig";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ProfileContent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchFile, setSearchFile] = useState("");
  const [rbResponse, setRbResponse] = useState(null);
  const [toOrFrom, setToOrFrom] = useState("from");

  const options = ["from", "to"];

  const callRBApi = (toFrom) => {
    var myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      "token 88bccd05ea06c5aff17c305ec466b1319282a652"
    );

    var raw = "";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    toFrom === "to"
      ? fetch(
          `http://reviewboard.mathworks.com/api/review-requests/?to-users=amehta`,
          requestOptions
        )
          .then((response) => setRbResponse(response))
          .catch((error) => console.log("error", error))
      : fetch(
          `http://reviewboard.mathworks.com/api/review-requests/?from-user=amehta`,
          requestOptions
        )
          .then((response) => setRbResponse(response))
          .then((response) => console.log(response))
          .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Dropdown
        options={options}
        onChange={() => callRBApi("from")}
        value={options[0]}
      />
      {rbResponse ? <>{toOrFrom}</> : <></>}
    </>
  );
};

const ReviewBoard = () => {
  return (
    <>
      <ProfileContent />
    </>
  );
};

export default ReviewBoard;
