import React from "react";

// Link Icons
import github from "./github-logo.png";
import Arrow from "./arrow.svg";

const Github = () => {
  return (
    <div style={{ backgroundColor: "#98D0FF" }} className="link-widget">
      <a
        href="https://www.github.com/Akash-Sharma-1"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img className="link-widget-img" src={github} alt="github-logo" />
      </a>
      <a
        href="https://www.github.com/Akash-Sharma-1"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button
          className="github-button"
          style={{
            position: "absolute",
            bottom: "1.5em",
            left: "1.5em",
            padding: ".8em",
          }}
        >
          <img alt="arrow" src={Arrow} style={{ width: "1.8em" }} />
        </button>
      </a>
    </div>
  );
};

export default Github;
