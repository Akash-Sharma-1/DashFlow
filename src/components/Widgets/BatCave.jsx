import React from "react";
import { useState } from "react";
import { mwAPIs } from "../../authConfig";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ProfileContent = () => {
  const [searchText, setSearchText] = useState("");
  const [rbResponse, setRbResponse] = useState(null);

  const callBCApi = (clusterName) => {

    const options = {
      method: 'GET',
      headers: {
        Authorization: 'Basic Og=='
      },
    };

    fetch(
      `http://bat3cavepreview.mathworks.com/Cabbage/restServices/cluster/${clusterName}/details`, options
    )
      .then((response) => console.log(response.json()))
      .catch((error) => console.log("error", error));
  };

  return (
  <>
    {rbResponse ? (
      <div>
        hi
      </div>
    ) : (
      callBCApi("Bcgtech")
    )}
  </>
  );
};

const BatCave = () => {
  return (
    <>
      <ProfileContent />
    </>
  );
};

export default BatCave;
