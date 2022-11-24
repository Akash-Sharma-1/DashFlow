import gcal from "./Google_Calendar_icon.png";
import axios from "axios";
import Arrow from "./arrow.svg";
import React, { useState, useEffect } from "react";

const JIRA = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    let urlToSend = "/api/getJiraIssue"

    axios.get(urlToSend)
    .then(res=>{
        console.log(res.data)
        setIssues(res.data)
    })

  }, []);

  return (
    <div className="cal-widget">
      {/* <img src={gcal} alt="gcal" className="cal-icon" /> */}
      <div>
      {JSON.stringify(issues)}
      </div>

      <button
        className="cal-widget-button"
        style={{
          position: "absolute",
          bottom: "1.5em",
          left: "1.5em",
          padding: ".8em",
        }}
      >
        <img
          alt="arrow"
          className="cal-arrow"
          src={Arrow}
          style={{ maxWidth: "1.8em" }}
        />
      </button>
    </div>
  );
};

export default JIRA;
