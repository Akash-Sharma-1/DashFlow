import React from "react";
import { useState } from "react";
import { mwAPIs } from "../../authConfig";

const ProfileContent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchFile, setSearchFile] = useState("");
  return (
    <>
      <label>
        Search Content:
        <input
          type="text"
          name="name"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </label>
      <a
        href={`${mwAPIs.mwCodeSearchEndpoint}${searchText}`}
        target="_blank"
        rel="noreferrer"
      >
        <input type="submit" value="Submit" />
      </a>
      <br />
      <label>
        Search File:
        <input
          type="text"
          name="name"
          value={searchFile}
          onChange={(event) => setSearchFile(event.target.value)}
        />
      </label>
      <a
        href={`${mwAPIs.mwCodeSearchEndpoint}${searchFile}&searchField=filename`}
        target="_blank"
        rel="noreferrer"
      >
        <input type="submit" value="Submit" />
      </a>
    </>
  );
};

const CodeSearch = () => {
  return (
    <>
      <ProfileContent />
    </>
  );
};

export default CodeSearch;
